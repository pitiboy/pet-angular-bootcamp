import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.html'
})
export class LoginComponent {
  credentials: { login: string, password: string };

  constructor() {
    this.credentials = { login: '', password: '' };
  }

  // Event handler for form submit
  onLogin(): void {
    console.log('Form Submitted', this.credentials);
  }
}
