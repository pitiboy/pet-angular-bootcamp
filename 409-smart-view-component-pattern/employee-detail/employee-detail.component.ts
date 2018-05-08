import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { EmployeeLoader, Employee } from '../employee-loader.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  theEmployee: Observable<Employee>;

  constructor(route: ActivatedRoute, loader: EmployeeLoader) {
    this.theEmployee = route.params.pipe(
      map(params => params['employeeId']),
      switchMap(id => loader.getDetails(id)));
  }
}
