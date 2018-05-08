import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { employeeReducer } from './employees.state';
import { EmployeeListComponent } from './notification-manager/employee-list/employee-list.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { PositionListComponent } from './notification-manager/position-list/position-list.component';
import { positionReducer } from './positions.state';
import { SharedModule } from './shared-module/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponent,
    EmployeeListComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ positions: positionReducer, employees: employeeReducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
