import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HelpScreenComponent } from './help.component';

const routes: Routes = [
  { path: '', component: HelpScreenComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HelpScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HelpModule { }
