import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from '../dashboard.types';
import { DashboardService } from '../dashboard.service';
import { GraphData, getGraphData } from './graph-helper';

@Component({
  selector: 'views-breakdown',
  templateUrl: './views-breakdown.component.html'
})
export class ViewsBreakdownComponent {
  currentVideo: Observable<Video>;
  graphData: Observable<GraphData>;

  constructor(dashboardService: DashboardService) {
    this.currentVideo = dashboardService.currentVideo;
    this.graphData = getGraphData(this.currentVideo, dashboardService.filterForm.valueChanges, dashboardService.filterForm.value);
  }
}
