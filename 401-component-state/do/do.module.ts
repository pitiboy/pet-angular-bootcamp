import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared-module/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PositionListComponent } from './position-list/position-list.component';

import { DoComponent } from './do.component';

const doRoutes: Routes = [
  { path: '', component: DoComponent }
];

@NgModule({
  declarations: [
    EmployeeListComponent,
    PositionListComponent,
    DoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doRoutes),
    SharedModule
  ]
})
export class DoModule { }
