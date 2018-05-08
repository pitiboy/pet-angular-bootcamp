import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import {CarStateService} from '../car-state.service';

@Component({
  selector: 'axle-selector',
  templateUrl: './axle-selector.component.html'
})
export class AxleSelectorComponent {

  n: Observable<number>;

  constructor(private carStateService: CarStateService) {
    this.n = this.carStateService.state.pipe(map(carState => carState.nAxles));
  }

  more() {
    this.carStateService.changeAxles(1);
  }

  less() {
    this.carStateService.changeAxles(-1);
  }
}
