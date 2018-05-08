import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, tap, share } from 'rxjs/operators';

import { EmployeeLoader } from './employeeLoader';
import { Employee } from './employee';
import { statusStrings, LoadResultStatus, loadWithRetry } from './loader/loadWithRetry';
import { faulty } from './loader/faulty';

@Component({
  selector: 'app-root',
  templateUrl: './page.html',
  styleUrls: ['./page.css']
})
export class PageComponent {
  selectedEmployee: Observable<Employee | undefined>;
  status: Observable<string>;
  selectedEmployeeId = new Subject<number>();
  employees: Observable<Employee[]>;
  showEmployeeDetails: Observable<boolean>;

  constructor(employeeLoader: EmployeeLoader) {
    this.employees = employeeLoader.getList();

    const loadResults = loadWithRetry(
      this.selectedEmployeeId,
      id => employeeLoader.getDetails(id)
        .pipe(faulty<Employee>())   // add this to simulate bad connection
    ).pipe(share());

    this.status = loadResults.pipe(
      tap(result => console.log('RECEIVED', result, 'at', new Date())),
      map(result => statusStrings[result.status]));

    this.showEmployeeDetails = loadResults.pipe(
      map(result => result.status === LoadResultStatus.Success));

    this.selectedEmployee = loadResults.pipe(
      filter(result => result.status === LoadResultStatus.Success),
      map(result => result.data));
  }
}
