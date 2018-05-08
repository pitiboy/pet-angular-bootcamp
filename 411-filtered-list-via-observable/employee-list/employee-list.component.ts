import { Component } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { sortBy } from 'lodash-es';

import { EmployeeLoaderService } from '../employee-loader.service';
import { Employee } from '../employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  nameFilter = new FormControl('');
  sort = new FormControl('last_name');

  filteredList: Observable<Employee[]>;
  selectedId = new Subject<number>();
  selectedEmployee: Observable<Employee>;

  constructor(loader: EmployeeLoaderService) {
    // .valueChanges is missing the initial value; add it:
    const nameFilter$: Observable<string> =
      this.nameFilter.valueChanges
        .pipe(startWith(this.nameFilter.value));
    const sort$ = this.sort.valueChanges
      .pipe(startWith(this.sort.value));

    // List reacts to filter and sort changes
    this.filteredList = combineLatest(
      nameFilter$.pipe(
        debounceTime(250),
        switchMap(x => loader.getList(x))),
      sort$,
      (list, sort) => sortBy(list, sort)
    );

    // Detail reacts to selected employee changes
    this.selectedEmployee = this.selectedId
      .pipe(switchMap(id => loader.getDetails(id)));
  }
}
