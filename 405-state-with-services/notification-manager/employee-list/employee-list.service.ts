import { Injectable } from '@angular/core';
// Behavior Subject is a subclass of Observable
// it is an Observable that allows the creator
// to "push" new values into it
import { BehaviorSubject } from 'rxjs';

@Injectable({
  // This service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class EmployeeListService {

  // Application State for current and new employees
  // State is stored in _currentEmployees and _newEmployees

  // The behavior subjects allow consumers to be updated
  // when the state changes

  private _currentEmployees = [
    'Alice Anderson',
    'Billy Burton',
    'Carol Carson',
    'David Dennison'
  ];

  currentEmployees = new BehaviorSubject(this._currentEmployees);

  private _newEmployees = [
    'Erin Ericcson',
    'Frank Ferdinand'
  ];

  newEmployees = new BehaviorSubject(this._newEmployees);

  // To acknowledge an employee we need to do four things...
  ackEmployee(employee: string) {
    // 1. Update state by assigning a new array for _newEmployees
    this._newEmployees = this._newEmployees.filter(curEmployee => curEmployee !== employee);

    // 2. Notify any consumers of the employee state of changes to new employees
    this.newEmployees.next(this._newEmployees);

    // 3. Update state by assigning a new array for _currentEmployees
    this._currentEmployees.push(employee);

    // 4. Notify any consumers of the employee state of changes to current employees
    this.currentEmployees.next(this._currentEmployees);
  }

  ackAll() {
    this._newEmployees.forEach(emp => this._currentEmployees.push(emp));
    this._newEmployees = [];
    this.newEmployees.next(this._newEmployees);
    this.currentEmployees.next(this._currentEmployees);
  }
}
