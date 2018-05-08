import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'big-form',
  templateUrl: './big-form.component.html'
})
export class BigFormComponent {
  bigFormGroup: FormGroup;
  savedFormValue: any;

  constructor(fb: FormBuilder) {
    this.bigFormGroup = fb.group({
      importantInfo: ['This is important information!']
    });

    this.savedFormValue = this.bigFormGroup.value;
  }

  hasUnsavedChanges() {
    return this.bigFormGroup.dirty;
  }

  saveChanges() {
    this.savedFormValue = this.bigFormGroup.value;
    this.bigFormGroup.reset(this.bigFormGroup.value);
  }

  discardChanges() {
    this.bigFormGroup.reset(this.savedFormValue);
  }

}
