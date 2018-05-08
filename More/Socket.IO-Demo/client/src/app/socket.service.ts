import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as socket from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socketConnection: SocketIOClient.Socket;
  message = new Subject<string>();

  constructor() {
    this.socketConnection = socket('http://localhost:3000');
    this.socketConnection.on('visitCount', data => this.message.next(data));
  }
}
