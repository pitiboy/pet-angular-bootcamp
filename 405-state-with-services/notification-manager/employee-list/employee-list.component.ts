import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeListService } from './employee-list.service';
/*
  Components now pass and receive information between itself
  and services
*/
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  curEmployees: Observable<string[]>;
  newEmployees: Observable<string[]>;

  constructor(private employeeListService: EmployeeListService) {
    this.curEmployees = employeeListService.currentEmployees;
    this.newEmployees = employeeListService.newEmployees;
  }

  ackEmp(employee: string) {
    this.employeeListService.ackEmployee(employee);
  }
}
