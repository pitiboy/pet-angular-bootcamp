import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <div class="outline-box">First Component</div>
    <style>
      .outline-box {
        border: 3px solid blue;
      }
    </style>
  `
})
export class FirstComponent {

}
