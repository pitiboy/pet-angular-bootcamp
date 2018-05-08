import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  visitCount: Observable<string>;

  constructor(socketService: SocketService) {
    this.visitCount = socketService.message;
  }
}
