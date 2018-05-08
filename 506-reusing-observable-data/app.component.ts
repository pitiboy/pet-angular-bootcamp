import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

import { CompanyLoader } from './company-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  company: Observable<any>;
  flag = false;

  constructor(loader: CompanyLoader) {
    // this.company = loader.loadOneCompany().share();
    //  share  = .publish().refCount().
    this.company = loader.loadOneCompany().pipe(
      publishReplay(1),
      refCount()
    );
  }
}
