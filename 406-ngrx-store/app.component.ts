import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PickBerryAction, AppState, PickApplesAction, EmptyCartAction } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  berry: Observable<number>;
  apple: Observable<number>;
  total: Observable<number>;

  constructor(public store: Store<AppState>) {
    this.berry = store.select(myAppState => myAppState.berryCounter);
    this.apple = store.select(state => state.appleCounter);
    this.total = store.pipe(map(s => s.berryCounter + s.appleCounter));
  }

  pickBerry() {
    this.store.dispatch(new PickBerryAction());
  }

  pickApple(count: number) {
    this.store.dispatch(new PickApplesAction(count));
  }

  empty() {
    this.store.dispatch(new EmptyCartAction());
  }
}
