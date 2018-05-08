import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login';

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [LoginComponent]
})
export class AppModule { }
