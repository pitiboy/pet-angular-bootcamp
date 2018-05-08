import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './content-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentWrapperComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
