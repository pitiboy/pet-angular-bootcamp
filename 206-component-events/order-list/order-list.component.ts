import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  @Input() orders: Order[];

  @Output() selectOrder = new EventEmitter<Order>();

  // -------- external API above, internal implementation below

  pickOrder(order: Order) {
    this.selectOrder.emit(order);
  }
}
