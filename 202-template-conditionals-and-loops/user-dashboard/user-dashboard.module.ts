import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserDashboardModule { }
