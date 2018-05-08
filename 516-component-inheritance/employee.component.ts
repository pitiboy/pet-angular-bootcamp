import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from './interfaces';

@Component({
  selector: 'employee-base',
  template: ''
})
export class EmployeeComponent {
  @Input() employees: Employee[] = [];
  @Output() select = new EventEmitter();

  heading = 'Employees';

  selectEmployee(employee: Employee) {
    this.select.emit(employee);
  }
}
