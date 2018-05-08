import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PayrollSearchComponent } from './payroll-search.component';
import { SharedModule } from '../shared/shared.module';

const payrollRoutes: Routes = [
  { path: '', component: PayrollSearchComponent }
];

@NgModule({
  declarations: [
    PayrollSearchComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(payrollRoutes)
  ]
})
export class PayrollModule { }
