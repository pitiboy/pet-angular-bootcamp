import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { StarshipApi, IFilmMeta } from './starshipApi';

@Component({
  selector: 'app-root',
  templateUrl: 'starshipList.html'
})
export class StarshipListComponent {
  starships: Observable<IFilmMeta[]>;

  constructor(api: StarshipApi) {
    this.starships = api.starships();
  }
}
