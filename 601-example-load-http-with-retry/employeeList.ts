import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employeeList.html'
})
export class EmployeeListComponent {
  @Input() employees: Employee[];
  @Output() selectedEmployee = new EventEmitter<number>();
}
