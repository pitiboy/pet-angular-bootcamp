import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, share, switchMap } from 'rxjs/operators';

import { EmployeeLoader, Employee } from '../employee-loader.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  employee: Observable<Employee>;

  constructor(route: ActivatedRoute, loader: EmployeeLoader) {
    this.employee = route.params.pipe(
      pluck<Params, string>('employeeId'), // like .map(params => params['employeeId'])
      switchMap(id => loader.getDetails(id)),
      share()
    );
  }
}
