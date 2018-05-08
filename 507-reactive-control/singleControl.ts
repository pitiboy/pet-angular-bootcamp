import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './singleControl.html'
})
export class SingleControlComponent {
  name: FormControl;
  outputValue: string;

  constructor() {
    this.name = new FormControl('', Validators.required);
  }

  setValue() {
    this.name.setValue('Set from code');
  }

  useValue() {
    this.outputValue = 'testing 123 - ' + this.name.value;
  }
}
