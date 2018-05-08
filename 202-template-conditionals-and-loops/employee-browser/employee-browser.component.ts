import { Component } from '@angular/core';

const employees = [
  { name: 'Cynthia Cunningham', roles: ['moderator', 'infrastructure', 'firmware'] },
  { name: 'Peter Clark', roles: ['contingency', 'protocol'] },
  { name: 'Theresa Soto', roles: ['implementation'] },
  { name: 'Russell Fisher', roles: ['implementation', 'application'] },
  { name: 'Elizabeth Hudson', roles: ['instruction set design'] },
  { name: 'Heather Spencer', roles: ['moderator'] },
  { name: 'Barbara Tran', roles: ['protocol'] },
  { name: 'Julia Anderson', roles: ['instruction set design', 'implementation'] }
];

@Component({
  selector: 'app-root',
  templateUrl: './employee-browser.component.html'
})
export class EmployeeBrowserComponent {
  employeeList = employees;
  showInactiveRoles = true;
}
