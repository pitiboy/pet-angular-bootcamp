import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, merge, combineLatest } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  retry,
  startWith,
  switchMap,
  tap
} from 'rxjs/operators';

import { RedditImageSearchService } from './reddit-image-search.service';

@Component({
  selector: 'reddit-search',
  templateUrl: './reddit-search.component.html'
})
export class RedditSearchComponent {
  subReddit = new FormControl('aww');
  search = new FormControl('');
  results: Observable<string[]>;

  constructor(ris: RedditImageSearchService) {
    const validSubReddit$ = this.subReddit.valueChanges.pipe(
      startWith(this.subReddit.value),
      map(sr => sr.trim()),
      distinctUntilChanged(),
      filter(sr => sr !== ''));

    const validSearch$ = this.search.valueChanges.pipe(
      startWith(this.search.value),
      map(search => search.trim()),
      distinctUntilChanged(),
      filter(search => search !== ''));

    const combinedCriteria$ = combineLatest(
      validSubReddit$, validSearch$,
      (subReddit, search) => ({ subReddit, search })
    );

    this.results = combinedCriteria$.pipe(
      tap(x => console.log('change', x)),
      debounceTime(500),
      tap(x => console.log('after debounce', x)),
      switchMap(val =>
        merge(
          // Initially, show no results, while waiting.
          of([]),
          // Replace with results as they arrive, auto retry.
          ris.search(val.subReddit, val.search)
            .pipe(retry(3))
        )));
  }
}
