import { AckPositionAction } from './../../positions.state';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../state';

@Component({
  selector: 'position-list',
  templateUrl: './position-list.component.html'
})
export class PositionListComponent {
  curPositions: Observable<string[]>;
  newPositions: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.curPositions = store.select(state => state.positions.currentPositions);
    this.newPositions = store.select(state => state.positions.newPositions);
  }

  ackPos(position: string) {
    this.store.dispatch(new AckPositionAction(position));
  }
}
