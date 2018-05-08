import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Employee } from './employee';

const API_URL = '/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoader {
  constructor(private http: HttpClient) { }

  getList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees')
      .pipe(map(longList => longList.slice(0, 9)));
  }

  getDetails(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${API_URL}/employees/${employeeId}`);
  }
}
