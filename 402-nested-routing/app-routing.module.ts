import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'payroll', pathMatch: 'full' },
  { path: 'hr', loadChildren: './hr-files/hr.module#HrModule' },
  { path: 'payroll', loadChildren: './payroll/payroll.module#PayrollModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
