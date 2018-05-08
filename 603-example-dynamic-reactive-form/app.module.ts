import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent }  from './dynamic-form';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [DynamicFormComponent]
})
export class AppModule { }
