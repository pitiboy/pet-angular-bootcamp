import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlinkDirective } from './blink.directive';
import { BounceDirective } from './bounce.directive';
import { DragDirective } from './drag.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlinkDirective,
    BounceDirective,
    DragDirective
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
