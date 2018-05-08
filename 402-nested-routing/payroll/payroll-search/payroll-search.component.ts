import { Component } from '@angular/core';

@Component({
  selector: 'payroll-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Payroll Search</span>
        <div>Search for Employee Payroll Records</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class PayrollSearchComponent { }
