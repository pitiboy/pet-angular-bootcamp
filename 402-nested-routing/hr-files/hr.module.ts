import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HrFilesSearchComponent } from './hr-files-search.component';
import { SharedModule } from '../shared/shared.module';

const hrRoutes: Routes = [
  { path: '', component: HrFilesSearchComponent }
];

@NgModule({
  declarations: [
    HrFilesSearchComponent
  ],
  exports: [HrFilesSearchComponent],         // export COMPONENTS, directives, pipes
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(hrRoutes)
  ]   // import MODULES
})
export class HrModule { }
