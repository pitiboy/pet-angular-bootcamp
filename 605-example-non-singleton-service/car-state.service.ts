// Here is the essential shape of the state of this example
// system, including the "business rules".

import { BehaviorSubject } from 'rxjs';

export class CarState {
  nAxles: number;
  wheelQtys: number[];
  ok: boolean;
  message: string;
}

function calculateValidity(state: CarState) {
  state.ok = true;
  state.message = '';

  if (state.nAxles === 0) {
    state.ok = false;
    state.message = 'must have at least one axle';
    return;
  }

  const totalWheels = state.wheelQtys.reduce((prev, q) => prev + q, 0);
  if (totalWheels === 0) {
    state.ok = false;
    state.message = 'must have at least one wheel';
    return;
  }

  if (state.nAxles * 2 !== totalWheels) {
    state.ok = false;
    state.message = 'total wheels must be 2x total axles';
    return;
  }

  const oddWheels = state.wheelQtys.reduce((prev, q) => prev + (q % 2), 0);
  if (oddWheels !== 0) {
    state.ok = false;
    state.message = 'all wheels must be used in pairs';
    return;
  }
}

export const WHEEL_TYPES = [
  'Wide Slicks',
  'Cheap Trailer',
  'Skinny',
  'Mars Rover',
  'Stone'
];

// This class has no real dependency on Angular; by skipping the
// unnecessary Injectable decorator, that is made obvious when looking
// at the imports.
// @Injectable()

export class CarStateService {

  state: BehaviorSubject<CarState>;

  constructor() {
    const state = new CarState();
    state.nAxles = 0;
    state.wheelQtys = Array(WHEEL_TYPES.length).fill(0);
    calculateValidity(state);
    this.state = new BehaviorSubject<CarState>(state);
  }

  changeAxles(delta: number) {
    this.updateState(s => s.nAxles = Math.max(s.nAxles + delta, 0));
  }

  changeWheelQty(i: number, delta: number) {
    this.updateState(s => s.wheelQtys[i] = Math.max(s.wheelQtys[i] + delta, 0));
  }

  private updateState(f: (x: CarState) => void) {
    let newState: CarState = Object.assign({}, this.state.getValue());
    f(newState);
    calculateValidity(newState);
    this.state.next(newState);
  }
}
