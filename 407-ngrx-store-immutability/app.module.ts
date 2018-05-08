import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared-module/shared.module';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { EmployeeListComponent } from './notification-manager/employee-list/employee-list.component';
import { PositionListComponent } from './notification-manager/position-list/position-list.component';
import { positionReducer } from './positions.state';
import { employeeReducer } from './employees.state';
import { AppState } from './state';

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponent,
    EmployeeListComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>({
      positions: positionReducer,
      employees: employeeReducer
    }),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
