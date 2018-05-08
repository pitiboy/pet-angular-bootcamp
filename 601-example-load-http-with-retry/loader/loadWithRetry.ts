import { Observable, Subject, defer, merge, of, timer } from 'rxjs';
import { delayWhen, filter, map, retryWhen, switchMap, tap } from 'rxjs/operators';

export enum LoadResultStatus {
  InProgress,
  Retrying,
  Waiting,
  Success,
  Error
}

export const statusStrings = [
  'In Progress',
  'Retrying',
  'Waiting to Retry',
  'Success',
  'Error'
];

export interface LoadResult<T> {
  status: LoadResultStatus;
  data?: T;
  error?: any;
  willRetry?: boolean;
}

interface Options {
  // To retry once after failure, use attempts=2
  attempts: number;
  retryDelayMs: number;
  retryBackoffCoefficient: number;
  retryMaxDelayMs: number;
}

export interface LoadWithRetryOptions extends Partial<Options> {
}

const DEFAULT_OPTIONS: Options = {
  attempts: 3,
  retryDelayMs: 2000,
  retryBackoffCoefficient: 1.5,
  retryMaxDelayMs: 30000
};

export function loadWithRetry<S, T>(
  source: Observable<S>,
  producer: (key: S) => Observable<T>,
  opts?: LoadWithRetryOptions
): Observable<LoadResult<T>> {
  const options = { ...DEFAULT_OPTIONS, ...opts };

  return source.pipe(switchMap(key => {
    const sideChannel = new Subject<LoadResult<T>>();
    let attempt = 0;
    return merge(
      of({ status: LoadResultStatus.InProgress }),
      sideChannel,
      defer(() => {
        attempt++;
        return producer(key);
      }).pipe(
        retryWhen(errors => errors.pipe(
          tap(error =>
            sideChannel.next({
              status: LoadResultStatus.Error,
              error,
              willRetry: attempt < options.attempts
            })),
          filter(_ => attempt < options.attempts),
          tap(_ => sideChannel.next({ status: LoadResultStatus.Waiting })),
          delayWhen(() => retryDelay(options, attempt)),
          tap(_ => sideChannel.next({ status: LoadResultStatus.Retrying })))
        ),
        map((data: T) => ({ status: LoadResultStatus.Success, data })))
    );
  }));
}

function retryDelay(options: Options, attempt: number): Observable<any> {
  const jitter = (Math.random() - .5) * options.retryDelayMs * .5;
  let delay = options.retryDelayMs * Math.pow(options.retryBackoffCoefficient, attempt - 1) + jitter;
  delay = Math.min(delay, options.retryMaxDelayMs);
  return timer(delay);
}
