import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = '/api';

// Or connect directly to the API server (local development only)
// const API_URL = 'http://localhost:8085';

// Or connect to the hosted demo API (works from StackBlitz):
// const API_URL = 'https://api.angularbootcamp.com';

export interface Employee {
  first_name: string;
  last_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoaderService {

  constructor(private http: HttpClient) { }

  loadEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees');
  }
}
