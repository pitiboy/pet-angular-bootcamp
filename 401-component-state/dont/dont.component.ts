import { Component } from '@angular/core';

/*
  Notice the bloat this top level component has taken on. It needs
  to "own" the data in order to make the appropriate modifications.
  Problems: file size/scope, mixing of concerns, all other problems
  associated with monoliths.
*/

@Component({
  selector: 'dont-example',
  templateUrl: './dont.component.html'
})
export class DontComponent {
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

  currentPositions = [
    'Copier',
    'Secretary to Customer Design Spec Engineer',
    'Tester',
    'Phone Bank Worker'
  ];

  newPositions = [
    'Manager',
    'Break Room Attendant'
  ];

  ackPosition(position: string) {
    this.newPositions = this.newPositions.filter(curPosition => curPosition !== position);
    this.currentPositions.push(position);
  }

  ackEmployee(employee: string) {
    this.newEmployees = this.newEmployees.filter(curEmployee => curEmployee !== employee);
    this.currentEmployees.push(employee);
  }

  ackAll() {
    this.newPositions.forEach(pos => this.currentPositions.push(pos));
    this.newPositions = [];
    this.newEmployees.forEach(emp => this.currentEmployees.push(emp));
    this.newEmployees = [];
  }
}
