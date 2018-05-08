import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrFilesSearchComponent } from './hr-files-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HrFilesSearchComponent
  ],
  exports: [HrFilesSearchComponent],      // export COMPONENTS, directives, pipes
  imports: [SharedModule, CommonModule]   // import MODULES
})
export class HrModule { }
