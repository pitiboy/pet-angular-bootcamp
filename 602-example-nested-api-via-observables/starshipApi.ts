import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { jsonRequestHeaders } from './httpUtils';

export interface IFilmMeta {
  name: string;
  filmName?: string;
  films: any[];
}

export interface IFilm {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class StarshipApi {
  constructor(private http: HttpClient) { }

  starships(): Observable<IFilmMeta[]> {
    const url = 'https://swapi.co/api/starships/';
    return this.http.get<{results: IFilmMeta[]}>(url, {headers: jsonRequestHeaders}).pipe(
      // extract results field
      map(shipWrapper => shipWrapper.results),
      mergeMap(ships => {
        const shipObservables = ships.map((ship: IFilmMeta) => {
          console.log('GETting film data for ' + ship.name);
          return this.http.get<IFilm>(ship.films[0], {headers: jsonRequestHeaders})
            .pipe(map(film => {
              ship.filmName = film.title;
              return ship;
            }));
        });

        // forkJoin is somewhat like Promise.all();
        // array of Observables -> Observable of an array
        return forkJoin(shipObservables);
      }));
  }
}
