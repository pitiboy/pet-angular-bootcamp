import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="outline-box">Second Component</div>
  `,
  styles: [`
    .outline-box {
      border: 3px solid green;
    }
    :host {
      display: block;
      border: 3px solid #ccc;
    }
  `]
})
export class SecondComponent {

}
