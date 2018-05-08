import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  template: `
    <h3>Employees</h3>
    <ul>
      <li *ngFor="let e of employees | async">
        {{e.first_name}} {{e.last_name}}
      </li>
    </ul>
  `
})
export class AppComponent {
  employees: Observable<any[]>;

  constructor(es: EmployeesService) {
    // this.employees = es.getEmployees();
    // this.employees = es.poll1();
    this.employees = es.poll2();
  }
}
