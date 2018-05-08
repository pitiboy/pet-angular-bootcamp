import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, interval } from 'rxjs';
import { delay, map, share, take } from 'rxjs/operators';

import { Item } from './item-types';

// This Data service is intentionally unrealistic; it exposes and
// manipulates the same data in three different ways, so that we can
// experiment with different change detection settings.

// For any real code, please pick one approach - the code will be
// shorter and better.

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  // Mutate State
  itemList1: Item[] = [];

  // Immutable State
  itemList2: Item[] = [];

  // Observable State
  private _itemlist3: BehaviorSubject<Item[]> = new BehaviorSubject(this.itemList2);
  itemList3: Observable<Item[]> = this._itemlist3.pipe(share());

  constructor() {
    this.populate();
    this.simulateIncomingDataFlow();
  }

  toggleItem(itemIndex: number) {
    // Mutate State
    this.itemList1[itemIndex].completed = !this.itemList1[itemIndex].completed;

    // Immutable State
    this.itemList2 = [... this.itemList2];
    this.itemList2[itemIndex] = Object.assign(
      {},
      this.itemList2[itemIndex],
      { completed: !this.itemList2[itemIndex].completed });

    // Observable State
    this._itemlist3.next(this.itemList2);
  }

  toggleAllItems() {
    // Mutate State
    this.itemList1.forEach(item => item.completed = !item.completed);

    // Immutable State
    this.itemList2 = this.itemList2.map(item =>
      Object.assign(
        {},
        item,
        { completed: !item.completed }));

    // Observable State
    this._itemlist3.next(this.itemList2);
  }

  addItem(newItem: Item) {
    // Mutate State
    this.itemList1.unshift(newItem);  // add at the front

    // Immutable State
    this.itemList2 = [newItem, ... this.itemList2];

    // Observable State
    this._itemlist3.next(this.itemList2);
  }

  addRandomItem() {
    const num = Math.round(Math.random() * 10000);
    this.addItem(makeItem(num));
  }

  private populate() {
    this.addItem(makeItem(1));
    this.addItem(makeItem(2));
    this.addItem(makeItem(3));
  }

  private simulateIncomingDataFlow() {
    interval(2000).pipe(
      delay(1000),
      map(n => n + 10),
      take(100)).
      subscribe(n => this.addItem(makeItem(n)));
  }
}

function makeItem(n: number) {
  return {
    name: 'Item ' + n,
    description: 'I am Item ' + n + ', otherwise here is some text to look at.',
    completed: false
  };
}
