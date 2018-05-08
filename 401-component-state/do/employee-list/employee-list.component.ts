import { Component } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  currentEmployees = [
    'Alice Anderson',
    'Billy Burton',
    'Carol Carson',
    'David Dennison'
  ];

  newEmployees = [
    'Erin Ericcson',
    'Frank Ferdinand'
  ];

  ackEmployee(employee: string) {
    this.newEmployees = this.newEmployees.filter(curEmployee => curEmployee !== employee);
    this.currentEmployees.push(employee);
  }
}
