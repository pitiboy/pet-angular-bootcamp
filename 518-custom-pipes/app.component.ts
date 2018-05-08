import { Component } from '@angular/core';

interface Car {
  brand: string;
  year: number;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  myDate = new Date();
  items: string[] = ['abc', '123', 'xyzabcdef', 'abc123', '8756'];
  cars: Car[] = [
    { brand: 'Toyota', year: 2014, color: 'Red' },
    { brand: 'Toyota', year: 2011, color: 'Green' },
    { brand: 'Ford', year: 2005, color: 'Black' },
    { brand: 'Ford', year: 2009, color: 'White' },
    { brand: 'Ford', year: 2013, color: 'Yellow' }
  ];
  // AOT flags these as errors (wrong data type flowing in to a pipe),
  // unless they are typed "any". We do so here to illustrate the
  // runtime behaviour of sending the wrong data type in to a pipe.
  value12345: any = 12345;
  valueEmptyString: any = '';
  valueHi: any = 'Hi!';
}
