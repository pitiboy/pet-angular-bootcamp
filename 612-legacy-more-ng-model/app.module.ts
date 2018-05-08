import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ColorComponent }  from './color';

@NgModule({
  declarations: [ColorComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [ColorComponent]
})
export class AppModule { }
