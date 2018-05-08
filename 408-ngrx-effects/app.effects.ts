import { Injectable } from '@angular/core';

import { Actions, Effect, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';

import { ACK_ALL, AckAllSuccessAction, DataReceivedAction } from './state';

const initialState = {
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

@Injectable()
export class AppEffects {
  // To use effects we will always need the action stream injected; in
  // some cases it is also helpful to inject the Store itself, with a
  // parameter like:
  // private store: Store<AppState>
  constructor(private actions$: Actions) {
  }

  // ROOT_EFFECTS_INIT is a special action that is dispatched at the end of
  // NgRx's initialization process, so this effect executes at application
  // initialization.
  @Effect()
  init$ = this.actions$
    .ofType(ROOT_EFFECTS_INIT).pipe(
      map(() => new DataReceivedAction(initialState))
    );

  // This confirmation step could have been added at dispatch
  // instead, but it's cleaner to keep as little business logic
  // in the component as possible. Note that the output is a
  // different type of action; this is necessary to avoid an
  // infinite loop.
  @Effect()
  ackAll$ = this.actions$
    .ofType(ACK_ALL).pipe(
      filter(() => window.confirm('Are you sure?')),
      map(() => new AckAllSuccessAction())
    );
}
