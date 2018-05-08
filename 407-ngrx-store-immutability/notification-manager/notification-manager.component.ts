import { DataReceivedAction, AckAllAction } from './../state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../state';

@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html'
})
export class NotificationManagerComponent {

  constructor(private store: Store<AppState>) {
    const payload: AppState = {
      employees: {
        currentEmployees: [
          'Alice Anderson',
          'Billy Burton',
          'Carol Carson',
          'David Dennison'
        ],
        newEmployees: [
          'Erin Ericcson',
          'Frank Ferdinand'
        ]
      },
      positions: {
        currentPositions: [
          'Copier',
          'Secretary to Customer Design Spec Engineer',
          'Tester',
          'Phone Bank Worker'
        ],
        newPositions: [
          'Manager',
          'Break Room Attendant'
        ]
      }
    };
    store.dispatch(new DataReceivedAction(payload));
  }

  ackAll() {
    this.store.dispatch(new AckAllAction());
  }
}
