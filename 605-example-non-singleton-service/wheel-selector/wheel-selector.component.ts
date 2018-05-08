import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CarStateService, WHEEL_TYPES } from '../car-state.service';

interface ITypeQty {
  wt: string;
  q: number;
}

@Component({
  selector: 'wheel-selector',
  templateUrl: './wheel-selector.component.html'
})
export class WheelSelectorComponent {

  typesAndQtys: Observable<ITypeQty[]>;

  constructor(private carStateService: CarStateService) {
    // If you need to combine synchronous and asynchronous data
    // in the template, do it in the typescript
    this.typesAndQtys = this.carStateService.state.pipe(map(carState =>
      carState.wheelQtys.map((q, index) => ({ wt: WHEEL_TYPES[index], q }))));
  }

  more(i: number) {
    this.carStateService.changeWheelQty(i, 1);
  }

  less(i: number) {
    this.carStateService.changeWheelQty(i, -1);
  }

}
