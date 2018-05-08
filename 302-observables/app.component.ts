import { Component } from '@angular/core';

import { EmployeeLoaderService, Employee } from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData: Employee[];

  constructor(svc: EmployeeLoaderService) {
    svc.loadEmployees()
      .subscribe((data: Employee[]) => this.employeeData = data);
  }
}
