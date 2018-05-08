import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../state';
import { AckAllAction } from './../state';

@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html'
})
export class NotificationManagerComponent {

  constructor(private store: Store<AppState>) { }

  ackAll() {
    this.store.dispatch(new AckAllAction());
  }
}
