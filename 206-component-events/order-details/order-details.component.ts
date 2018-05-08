import { Component, Input } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
  @Input('selectedOrderDetails') sod: Order;
}
