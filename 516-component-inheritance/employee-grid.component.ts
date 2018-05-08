import { Component } from '@angular/core';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'employee-grid',
  templateUrl: './employee-grid.component.html'
})
export class EmployeeGridComponent extends EmployeeComponent { }
