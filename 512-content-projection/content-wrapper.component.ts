import {Component} from '@angular/core';

@Component({
  selector: 'content-wrapper',
  template: `
  <section class="card">
    <div class="card-content">
      <div class="card-title">I wrap content</div>
      <ng-content></ng-content>
    </div>
  </section>
  `
})
export class ContentWrapperComponent { }
