import { Component } from '@angular/core';

import { Employee } from './interfaces';

const data = [{
  id: 1,
  first_name: 'Henry',
  last_name: 'Holmes',
  email: 'hholmes0@goodreads.com',
  hours_worked: 29,
  hourly_wage: 19
},
{
  id: 2,
  first_name: 'Harold',
  last_name: 'Cox',
  email: 'hcox1@who.int',
  hours_worked: 18,
  hourly_wage: 11
},
{
  id: 3,
  first_name: 'Brian',
  last_name: 'Garcia',
  email: 'bgarcia2@addthis.com',
  hours_worked: 4,
  hourly_wage: 17
},
{
  id: 4,
  first_name: 'Patricia',
  last_name: 'Young',
  email: 'pyoung3@wix.com',
  hours_worked: 47,
  hourly_wage: 12
},
{
  id: 5,
  first_name: 'Jose',
  last_name: 'Jacobs',
  email: 'jjacobs4@prweb.com',
  hours_worked: 45,
  hourly_wage: 12
},
{
  id: 6,
  first_name: 'Rachel',
  last_name: 'Carter',
  email: 'rcarter5@t.co',
  hours_worked: 34,
  hourly_wage: 17
}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showList = true;
  myEmployees: Employee[] = data;

  toggleView() {
    this.showList = !this.showList;
  }

  logEmployee(employee: Employee) {
    console.log(employee);
  }
}
