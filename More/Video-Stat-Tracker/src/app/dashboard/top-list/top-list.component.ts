import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardService } from '../dashboard.service';
import { Video } from '../dashboard.types';

@Component({
  selector: 'top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent {

  topList: Observable<Video[]>;
  selectedVideo: Observable<Video>;

  constructor(dashboardService: DashboardService) {
    this.topList = dashboardService.getTopList()
    this.selectedVideo = dashboardService.currentVideo
  }

}
