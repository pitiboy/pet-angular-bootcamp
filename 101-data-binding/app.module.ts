import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// The module class can have any name you like, but it is wise to name
// it ___Module, because the TypeScript type system cannot yet express
// a type for "the class must have decorator Abc".

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
