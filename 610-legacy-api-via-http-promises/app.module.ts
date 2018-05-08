import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StarshipListComponent } from './starshipList';

@NgModule({
  declarations: [StarshipListComponent],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [StarshipListComponent]
})
export class AppModule { }
