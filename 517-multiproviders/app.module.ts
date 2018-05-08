import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstService, SecondService } from './services';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    { provide: 'foo', useClass: FirstService, multi: true },
    { provide: 'foo', useClass: SecondService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
