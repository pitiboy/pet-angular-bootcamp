import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollSearchComponent  } from './payroll-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PayrollSearchComponent
  ],
  exports: [PayrollSearchComponent],
  imports: [SharedModule, CommonModule]
})
export class PayrollModule { }
