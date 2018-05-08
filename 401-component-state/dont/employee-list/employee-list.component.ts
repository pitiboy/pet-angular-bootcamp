import { Component, Input, Output, EventEmitter } from '@angular/core';

/*

  Notice that the component becomes a pass through...
  Q: So why not just remove the component?
  A: Why use multiple components at all?

*/
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  @Input() curEmployees: string[];
  @Input() newEmployees: string[];
  @Output() ackEmployee = new EventEmitter<string>();

  ackEmp(employee: string) {
    this.ackEmployee.emit(employee);
  }
}
