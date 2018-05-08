import { Component } from '@angular/core';

@Component({
  selector: 'position-list',
  templateUrl: './position-list.component.html'
})
export class PositionListComponent {
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
}
