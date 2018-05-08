// This generate some activity, changes in a Firebase database,
// so that things are changing making the point of an observable obvious.

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class Generator {
  constructor(private afDb: AngularFireDatabase) { }

  next() {
    const category = 'cat' + Math.floor((Math.random() * 3) + 1);
    const id = 'id' + Math.floor((Math.random() * 10) + 2001);
    const name = 'Joe' + Math.floor((Math.random() * 900) + 1001);
    const score = Math.floor((Math.random() * 100) + 1);

    this.afDb.object('stuff' + '/' + category + '/' + id).set({
      name: name,
      score: score,
      present: score > 2
    });
  }
}
