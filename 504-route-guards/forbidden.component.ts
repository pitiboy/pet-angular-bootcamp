import { Component } from '@angular/core';

@Component({
  selector: 'forbidden-component',
  template: `
    <section class="card">
      <div class="card-content">
        <div class="card-title">Access Forbidden</div>
        <p>Sorry, you don't have access to App Administration :-(</p>
        <p><a [routerLink]="['/home']">Return to Home</a></p>
      </div>
    </section>
  `
})
export class ForbiddenComponent {
}
