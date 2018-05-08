import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../state';
import { AckEmployeeAction } from './../../employees.state';

/*
  Components now pass and receive information between itself
  and the store
*/
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  curEmployees: Observable<string[]>;
  newEmployees: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.curEmployees = store.select(state => state.employees.currentEmployees);
    this.newEmployees = store.select(state => state.employees.newEmployees);
  }

  ackEmp(employee: string) {
    this.store.dispatch(new AckEmployeeAction(employee));
  }
}
