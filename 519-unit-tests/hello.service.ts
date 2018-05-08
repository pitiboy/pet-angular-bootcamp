import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  calculateHello(who: string) {
    return 'Hello, ' + who + '!';
  }

}
