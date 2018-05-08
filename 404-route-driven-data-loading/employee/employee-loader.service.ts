import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hours_worked: number;
  hourly_wage: number;
}

const API_URL = '/api';

@Injectable()
export class EmployeeLoader {
  constructor(private http: HttpClient) { }

  getList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees')
      .pipe(map(longList => longList.slice(0, 9)));
  }

  getDetails(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(`${API_URL}/employees/${employeeId}`);
  }
}
