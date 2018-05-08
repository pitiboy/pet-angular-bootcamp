import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeLoaderService, Employee } from '../employee-loader.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  list: Observable<Employee[]>;

  constructor(loader: EmployeeLoaderService) {
    this.list = loader.getList();
  }
}
