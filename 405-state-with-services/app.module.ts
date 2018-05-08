import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { EmployeeListComponent } from './notification-manager/employee-list/employee-list.component';
import { PositionListComponent } from './notification-manager/position-list/position-list.component';
import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared.module';

@NgModule({
  declarations: [
    NotificationManagerComponent,
    EmployeeListComponent,
    PositionListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
