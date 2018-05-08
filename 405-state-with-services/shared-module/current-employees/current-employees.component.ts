import { Component, Input } from '@angular/core';

@Component({
  selector: 'current-employees',
  templateUrl: './current-employees.component.html'
})
export class CurrentEmployeesComponent {

  @Input() employeeList: string[];

}
