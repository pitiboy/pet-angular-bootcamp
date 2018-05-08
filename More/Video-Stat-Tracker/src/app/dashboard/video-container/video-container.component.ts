import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DashboardService } from '../dashboard.service';
import { Video } from '../dashboard.types';

const URLPREFIX = 'https://www.youtube.com/embed/';

@Component({
  selector: 'video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent {

  currentVideo: Observable<Video>;
  videoUrl: SafeUrl

  constructor(dashboardService: DashboardService, domSanitizer: DomSanitizer) {
    this.currentVideo = dashboardService.currentVideo
      .pipe(
        tap(video => this.videoUrl = domSanitizer.bypassSecurityTrustResourceUrl(URLPREFIX + '/' + video.id))
      );
  }
}
