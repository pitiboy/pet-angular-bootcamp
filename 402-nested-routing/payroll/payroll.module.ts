import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PayrollScreenComponent } from './payroll-screen.component';
import { PayrollSearchComponent } from './payroll-search/payroll-search.component';
import { PayrollReportComponent } from './payroll-report/payroll-report.component';
import { SharedModule } from '../shared/shared.module';

const payrollRoutes: Routes = [
  {
    path: '',
    component: PayrollScreenComponent,
    children: [
      { path: '', redirectTo: 'search' },
      { path: 'search', component: PayrollSearchComponent },
      { path: 'report', component: PayrollReportComponent }
    ]
  }
];

@NgModule({
  declarations: [
    PayrollScreenComponent,
    PayrollSearchComponent,
    PayrollReportComponent
  ],
  exports: [],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(payrollRoutes)
  ]
})
export class PayrollModule { }
