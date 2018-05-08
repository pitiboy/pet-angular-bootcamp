import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, interval } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

const API_URL = '/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) { }

  getEmployees(url = '/employees') {
    return this.http.get(API_URL + url).pipe(

      catchError(err => {
        console.error('handling error within getEmployees()', err);
        const fakeData = [{ first_name: 'no employees could be loaded' }];
        return of(fakeData);
      }));
  }

  poll1() {
    return interval(2000).pipe(
      map(n => n % 2 ? '/employeesZZZ' : '/employees'),
      switchMap((dataUrl: string) => this.http.get(API_URL + dataUrl)),

      catchError((err) => {
        console.error('handling error within poll1()', err);
        const fakeData = [{ first_name: 'no employees could be loaded' }];
        return of(fakeData);
      }),
      tap((data: any) => console.log('Data arrived', data)));
  }

  poll2() {
    return interval(2000).pipe(
      map((n: number) => n % 2 ? '/employeesZZZ' : '/employees'),
      switchMap(dataUrl => this.getEmployees(dataUrl)),
      tap((data: any) => console.log('Data arrived', data)));
  }
}
