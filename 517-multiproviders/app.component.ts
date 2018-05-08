import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="card">
      <div class="card-content">
        <div class="card-title">From the first service: {{val1}}</div>
      </div>
    </section>
    <section class="card">
      <div class="card-content">
        <div class="card-title">From the second service: {{val2}}</div>
      </div>
    </section>
  `
})
export class AppComponent {
  val1: number;
  val2: number;

  constructor(@Inject('foo') foos: {val: number}[]) {
    // returns an array of providers with this name.
    this.val1 = foos[0].val;
    this.val2 = foos[1].val;
  }
}
