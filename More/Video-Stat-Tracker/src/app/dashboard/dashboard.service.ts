import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { shareReplay, pluck, withLatestFrom } from 'rxjs/operators';
import * as moment from 'moment';

import { Video } from './dashboard.types';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class DashboardService {

  filterForm: FormGroup;
  currentVideo: Observable<Video>;

  private selectedVideoId: Observable<string>;
  private videoList: Observable<Video[]>

  constructor(formBuilder: FormBuilder, private http: HttpClient, activeRoute: ActivatedRoute, private router: Router) {

    this.selectedVideoId = activeRoute.queryParams.pipe(
      pluck('videoId')
    )

    this.filterForm = formBuilder.group({
      region: ['All'],
      dateTo: [moment().startOf('day').format('YYYY-MM-DD')],
      dateFrom: [moment('1995-01-01').format('YYYY-MM-DD')],
      minor: [true],
      adults: [true],
      middleAged: [true],
      retired: [true]
    })

    this.currentVideo = combineLatest(
      this.selectedVideoId,
      this.getTopList(),
      (id: string, list: Video[]) => list.find(video => video.id === id)
    );
  }

  getTopList() {
    if (!this.videoList) {
      this.videoList = this.http.get<Video[]>('/assets/videos.json');
    }
    return this.videoList
      .pipe(
        withLatestFrom(this.selectedVideoId, (list, id) => {
          if (!id) {
            const navigationExtras = {
              queryParams: { videoId: list[0].id }
            }
            this.router.navigate([], navigationExtras);
          }
          return list
        }),
        shareReplay()
      );
  }
}
