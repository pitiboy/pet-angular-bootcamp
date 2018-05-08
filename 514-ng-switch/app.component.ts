import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  n: number = 0;
  food: string = 'apple';

  increment(_event: MouseEvent) {
    this.n++;
  }

  results() {
    if (this.n > 1 && this.n < 5) {
      return this.n;
    }
  }
}
