import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { BigFormComponent } from './big-form.component';

@Injectable({
  providedIn: 'root'
})
export class AreYouSureGuardService implements CanDeactivate<BigFormComponent> {

  canDeactivate(component: BigFormComponent) {

    if (component.hasUnsavedChanges()) {

      // In a real app, we'd probably use a platform-specific
      // dialog service, but `window.confirm` works for a demo.
      //
      return window.confirm(
        'There are unsaved changes! Are you sure you want to leave?'
      );
    }

    return true;
  }
}
