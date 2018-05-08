import { Component } from '@angular/core';

const meetings = [
  { description: 'Standup', participants: ['John', 'Paul', 'Ringo', 'George'] },
  { description: 'Meet with the Bills', participants: ['Bill', 'Bill', 'Peter'] },
  { description: 'Working lunch', participants: ['Joe', 'Jane'] }
];

const todoList = [
  'Attach cover letter to TPS report',
  'Double check decimal places',
  'Jump to conclusions'
];

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent {
  showProfile = true;
  nextMeetings = meetings;
  todos = todoList;

  addTodo() {
    this.todos.push(`Task ${this.todos.length + 1}`);
  }
}
