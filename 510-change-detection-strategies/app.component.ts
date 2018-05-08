import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ItemDataService } from './item-data/item-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  configFormGroup: FormGroup;

  constructor(public ids: ItemDataService, fb: FormBuilder) {
    this.configFormGroup = fb.group({
      data: ['mutable'],
      strategy: ['default']
    });
  }
}
