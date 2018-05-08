import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  id: Observable<string>;

  constructor(route: ActivatedRoute) {
    console.log('Creating new instance of EmployeeDetailComponent');
    this.id = route.params.pipe(
      tap(params => console.log('Got new value for params', params)),
      map(params => params['employeeId']));
  }
}
