import { Component, Input } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'employee-display',
  templateUrl: './employeeDisplay.html'
})
export class EmployeeDisplayComponent {
  @Input() employee: Employee;
}
