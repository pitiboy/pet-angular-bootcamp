import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { delay, tap } from 'rxjs/operators';

import { EmployeeLoaderService, Employee } from './employee-loader.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRetrieverService implements Resolve<Employee> {

  constructor(private loader: EmployeeLoaderService) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('started retrieving employee');
    return this.loader.getDetails(route.params['employeeId']).pipe(
      delay(3000),  // Simulate backend latency
      tap(x => console.log('employee information arrived', x)));
  }
}
