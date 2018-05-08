import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuardService } from './auth-guard.service';
import { AreYouSureGuardService } from './are-you-sure-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NameComponent } from './name.component';
import { AdminComponent } from './admin.component';
import { ForbiddenComponent } from './forbidden.component';
import { BigFormComponent } from './big-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello', component: NameComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bigform',
    component: BigFormComponent,
    canDeactivate: [ AreYouSureGuardService ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameComponent,
    AdminComponent,
    ForbiddenComponent,
    BigFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
