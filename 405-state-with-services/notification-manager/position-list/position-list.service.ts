import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// See employee-list.service.ts for
// a rundown of what these services do.

@Injectable({
  providedIn: 'root'
})
export class PositionListService {

  private _currentPositions = [
    'Copier',
    'Secretary to Customer Design Spec Engineer',
    'Tester',
    'Phone Bank Worker'
  ];
  currentPositions = new BehaviorSubject(this._currentPositions);

  private _newPositions = [
    'Manager',
    'Break Room Attendant'
  ];
  newPositions = new BehaviorSubject(this._newPositions);

  ackPosition(position: string) {
    this._newPositions = this._newPositions.filter(curPosition => curPosition !== position);
    this.newPositions.next(this._newPositions);
    this._currentPositions.push(position);
    this.currentPositions.next(this._currentPositions);
  }

  ackAll() {
    this._newPositions.forEach(emp => this._currentPositions.push(emp));
    this._newPositions = [];
    this.newPositions.next(this._newPositions);
    this.currentPositions.next(this._currentPositions);
  }
}
