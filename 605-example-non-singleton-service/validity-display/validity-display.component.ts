import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CarStateService } from '../car-state.service';

@Component({
  selector: 'validity-display',
  templateUrl: './validity-display.component.html',
  styleUrls: ['./validity-display.component.css']
})
export class ValidityDisplayComponent {

  ok: Observable<boolean>;
  message: Observable<string>;

  constructor(carStateService: CarStateService) {
    this.ok = carStateService.state.pipe(map(
      carState => carState.ok
    ));
    this.message = carStateService.state.pipe(map(
      carState => carState.message ? carState.message : 'ok!'
    ));
  }

}
