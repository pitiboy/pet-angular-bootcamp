import { Component, Input } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'employee-detail',
  templateUrl: './employeeDetail.html'
})
export class EmployeeDetailComponent {
  @Input() employee: Employee;
}
