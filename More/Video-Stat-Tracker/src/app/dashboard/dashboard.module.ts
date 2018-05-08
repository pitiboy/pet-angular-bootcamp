import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { ViewsFilterComponent } from './views-filter/views-filter.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { ViewsBreakdownComponent } from './views-breakdown/views-breakdown.component';
import { BarChartComponent } from './views-breakdown/bar-chart/bar-chart.component';
import { TopListComponent } from './top-list/top-list.component';
import { FilterStateDisplayComponent } from './views-breakdown/filter-state-display/filter-state-display.component';
import { DashboardService } from './dashboard.service';

const ROUTES: Route[] = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    DashboardComponent,
    ViewsFilterComponent,
    VideoContainerComponent,
    ViewsBreakdownComponent,
    BarChartComponent,
    TopListComponent,
    FilterStateDisplayComponent,
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
