import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import { flatMap } from 'lodash-es';

// tslint:disable-next-line:import-blacklist
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RedditImageSearchService {
  constructor(private http: HttpClient) { }

  search(subReddit: string, search: string): Observable<string[]> {
    const url = 'https://www.reddit.com/r/' +
      subReddit +
      '/search.json?restrict_sr=on&q=' + search;
    return this.http.get(url)
      .map(translateRedditResults);
  }
}

function translateRedditResults(items: any) {
  // This function doesn't know anything about HTTP or Observable; it just
  // manages the messy shape of this API's data return layout.

  return flatMap(items.data.children,
    ((item: { [key: string]: any }): string[] => {
      if (item) {
        const data = item['data'];
        if (data) {
          const thumbnail = data['thumbnail'];
          if (thumbnail.startsWith('http')) {
            return [thumbnail];
          }
        }
      }
      return [];
    }));
}
