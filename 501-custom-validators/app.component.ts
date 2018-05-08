import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { fiveValidator, matchingPasswordValidator } from './validators';
// import { trivialValidator, matchingFieldValidator } from './validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loginFormGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginFormGroup = fb.group(
      {
        login: ['user', Validators.required],
        password: ['defaultPass', [Validators.minLength(3), Validators.required]],
        enterFive: ['5', fiveValidator],
        confirmPassword: ['pass', Validators.minLength(3)]
      },
      {
        validator: matchingPasswordValidator
        // validator: matchingFieldValidator('password', 'confirmPassword', 'mismatched')
      });
  }

  onLogin(): void {
    console.log('Form Submitted', this.loginFormGroup.value);
  }

  logTheForm(): void {
    console.log('form: ', this.loginFormGroup);
  }
}
