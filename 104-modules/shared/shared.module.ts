import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBoxComponent } from './search-box.component';

@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  exports: [
    SearchBoxComponent
  ],
  imports: [CommonModule]
})
export class SharedModule { }
