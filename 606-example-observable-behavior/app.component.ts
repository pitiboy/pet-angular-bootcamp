import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';

import { jsonRequestHeaders } from './httpUtils';

interface Thing {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  time: Observable<number>;
  name: Observable<string>;
  showData: boolean = true;
  showExtraTime: boolean = true;

  constructor(http: HttpClient) {
    this.name = http.get<Thing>('https://swapi.co/api/people/11/', {headers: jsonRequestHeaders}).pipe(
      tap(thing => console.log(thing)),
      map(data => data.name));

    // Example of making an Observable:
    this.time = new Observable<number>((observer: Observer<number>) => {
      console.log('Subscribing to time');
      let handle = setInterval(() => {
        console.log('emitting time');
        observer.next(new Date().getTime() % 10000);
      }, 100);
      // stop interval on unsubscribe
      return function () {
        console.log('Unsubscribing to time');
        clearInterval(handle);
      };
    }).pipe(share());  // Try it without share().
  }
}
