import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Component CSS &amp; Encapsulation</h3>
    <div class="outline-box">
      <h5>Three components with different styles</h5>
      <app-first></app-first>
      <app-second></app-second>
      <app-third></app-third>
    </div>
  `
})
export class AppComponent { }
