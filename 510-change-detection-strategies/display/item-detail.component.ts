import {
  Component, ChangeDetectionStrategy, Input, Output,
  EventEmitter, OnChanges, DoCheck, SimpleChanges
} from '@angular/core';

import { Item } from '../item-data/item-types';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemDetailComponent implements OnChanges, DoCheck {
  @Input() item: Item;
  @Output() toggle = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('ItemDetail - ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('ItemDetail - ngDoCheck');
  }
}
