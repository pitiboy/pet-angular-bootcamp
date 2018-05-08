import { Component, Input } from '@angular/core';

import { Item } from '../api-types';

@Component({
  selector: 'order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent {
  @Input() items: Item[];
}
