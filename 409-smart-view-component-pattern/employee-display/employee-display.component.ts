import { Component, Input } from '@angular/core';

import { Employee } from '../employee-loader.service';

@Component({
  selector: 'employee-display',
  templateUrl: './employee-display.component.html'
})
export class EmployeeDisplayComponent {
  @Input() employee: Employee;
}
