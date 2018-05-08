import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeBrowserComponent } from './employee-browser.component';

const routes: Routes = [
  { path: '', component: EmployeeBrowserComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    EmployeeBrowserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeBrowserModule { }
