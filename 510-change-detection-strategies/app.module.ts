import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnPushStrategyComponent } from './display/onpush-strategy.component';
import { DefaultStrategyComponent } from './display/default-strategy.component';
import { ItemDetailComponent } from './display/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultStrategyComponent,
    OnPushStrategyComponent,
    ItemDetailComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
