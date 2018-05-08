import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SwService } from './sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  someNumber: number = 12;
  team: Observable<any[]>;

  constructor(sw: SwService) {
    this.team = sw.getList();
  }
}
