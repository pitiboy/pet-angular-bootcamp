import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PayrollModule } from './payroll/payroll.module';
import { HrModule } from './hr-files/hr.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [PayrollModule, HrModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
