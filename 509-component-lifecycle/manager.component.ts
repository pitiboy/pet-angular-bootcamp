import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'manager-cmp',
  templateUrl: './manager.component.html'
})
export class ManagerComponent {
  testGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.testGroup = fb.group({
      showing: [false],
      testVal: [''],
      testVal2: [''],
      testVal3: ['']
    });
  }
}
