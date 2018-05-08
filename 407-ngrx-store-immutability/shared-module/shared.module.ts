import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentEmployeesComponent } from './current-employees/current-employees.component';
import { CurrentPositionsComponent } from './current-positions/current-positions.component';
import { NewEmployeesComponent } from './new-employees/new-employees.component';
import { NewPositionsComponent } from './new-positions/new-positions.component';

const components = [
  CurrentEmployeesComponent,
  CurrentPositionsComponent,
  NewEmployeesComponent,
  NewPositionsComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components

})
export class SharedModule {}
