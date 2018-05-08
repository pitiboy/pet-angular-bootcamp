import { HttpClient } from '@angular/common/http';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

// Many TypeScript developers recommend always using undefined rather
// than null; however, the Angular documentation specifically states
// that an async validator should return an observable of either
// ValidationErrors or null.

export function simpleAsyncValidator(): Observable<ValidationErrors | null> {
  // return of({ simpleAsyncValidator: 'blew up' });
  // OK
  return of(null);
}

export function slowAsyncValidator(): Observable<ValidationErrors | null> {
  return of(null).pipe(delay(1000));
}

const url = 'https://api.zippopotam.us/us/';

export function westernZipValidatorFactory(http: HttpClient) {
  return (control: FormControl): Observable<ValidationErrors | null> => {
    return http.get<any>(url + control.value).pipe(
      tap(r => console.log(r)),
      map(data => data.places[0].longitude),
      map(l => l < -90),
      tap(ok => ok ? console.log('It is west enough') : console.log('It is not west enough')),
      map(ok => ok ? null : { westerliness: 'not enough' }),
      catchError(_e => {
        return of({ westerliness: 'Unable to verify' });
      }));
  };
}
