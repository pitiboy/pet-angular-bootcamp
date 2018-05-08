import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarOrderComponent } from './car-order/car-order.component';
import { AxleSelectorComponent } from './axle-selector/axle-selector.component';
import { WheelSelectorComponent } from './wheel-selector/wheel-selector.component';
import { ValidityDisplayComponent } from './validity-display/validity-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CarOrderComponent,
    AxleSelectorComponent,
    WheelSelectorComponent,
    ValidityDisplayComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
