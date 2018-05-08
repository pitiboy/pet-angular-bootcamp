import { Component } from '@angular/core';

import { StarshipApi } from './StarshipApi';

@Component({
  selector: 'app-root',
  templateUrl: './starshipList.html'
})
export class StarshipListComponent {
  starships: any[];

  constructor(api: StarshipApi) {
    api.loadStarships()
      .then((data: any) => this.starships = data);
  }
}
