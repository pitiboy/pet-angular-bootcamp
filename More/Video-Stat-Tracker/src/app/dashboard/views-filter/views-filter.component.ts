import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'views-filter',
  templateUrl: './views-filter.component.html'
})
export class ViewsFilterComponent {

  filterFormGroup: FormGroup;

  constructor(dashboardService: DashboardService) {
    this.filterFormGroup = dashboardService.filterForm;
  }
}
