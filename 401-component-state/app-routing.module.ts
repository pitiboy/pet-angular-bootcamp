import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'do', pathMatch: 'full' },
  { path: 'do', loadChildren: './do/do.module#DoModule' },
  { path: 'dont', loadChildren: './dont/dont.module#DontModule' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
