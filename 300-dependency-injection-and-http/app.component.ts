import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = '/api';

// Or connect directly to the API server (local development only)
// const API_URL = 'http://localhost:8085';

// Or connect to the hosted demo API (works from StackBlitz):
// const API_URL = 'https://api.angularbootcamp.com';

interface Employee {
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData: Employee[] = [];

  constructor(http: HttpClient) {
    http
      .get<Employee[]>(API_URL + '/employees')
      .subscribe(employees => this.employeeData = employees);
  }
}
