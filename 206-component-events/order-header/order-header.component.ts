import { Component, Input } from '@angular/core';

@Component({
  selector: 'order-header',
  templateUrl: './order-header.component.html'
})
export class OrderHeaderComponent {
  @Input('customerName') customer: string;
}
