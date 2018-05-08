import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'filter-state-display',
  templateUrl: './filter-state-display.component.html'
})
export class FilterStateDisplayComponent {
  filterForm: FormGroup;

  constructor(dashboardService: DashboardService) {
    this.filterForm = dashboardService.filterForm;
  }
}
