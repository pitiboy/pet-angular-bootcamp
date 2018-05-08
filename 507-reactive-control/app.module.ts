import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SingleControlComponent } from './singleControl';

@NgModule({
  declarations: [
    SingleControlComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [SingleControlComponent]
})
export class AppModule { }
