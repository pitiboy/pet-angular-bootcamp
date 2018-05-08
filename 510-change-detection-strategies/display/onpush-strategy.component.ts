import {
  Component, ChangeDetectionStrategy, Input,
  EventEmitter, Output, OnChanges, DoCheck, SimpleChanges
} from '@angular/core';

import { Item } from '../item-data/item-types';

@Component({
  selector: 'onpush-strategy',
  templateUrl: './onpush-strategy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushStrategyComponent implements OnChanges, DoCheck {
  @Input() items: Item[];
  @Output() toggleItem = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnPush Strategy - ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('OnPush Strategy - ngDoCheck');
  }
}
