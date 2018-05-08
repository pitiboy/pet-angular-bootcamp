import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {jsonRequestHeaders} from './httpUtils';

interface ISwapiStarShipResponse {
  results: { name: string }[];
}

// This special jsonRequestHeaders setting is needed with Firefox,
// but Chrome does the right thing with or without it.

@Component({
  selector: 'app-root',
  template: `
    <h3>Starships</h3>
    <ul>
      <li *ngFor='let s of starships'>{{s.name}}</li>
    </ul>
  `
})
export class StarshipListComponent {
  starships: { name: string }[] = [];
  // Note that index.html changed to include http

  constructor(http: HttpClient) {
    // If you are using HTTP in this trivial one-shot way, it is
    // reasonable to convert to a Promise, if you prefer:
    http.get<ISwapiStarShipResponse>('https://swapi.co/api/starships/', {headers: jsonRequestHeaders})
      .toPromise(Promise)   // Caveat - no way to unsubcribe the Observable.
      .then((data: ISwapiStarShipResponse) => {
        console.log(data);
        // throw ('broke on purpose');
        return data;
      })
      .then((data: ISwapiStarShipResponse) => this.starships = data.results)
      .catch(console.error);
  }
}
