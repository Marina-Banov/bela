import { EventEmitter, Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  private socket = io('http://localhost:3000');
  public updateUsersEvent = new EventEmitter();
  public handEvent = new EventEmitter();
  public callTrumpEvent = new EventEmitter();
  public setTrumpEvent = new EventEmitter();
  public username: string;

  constructor() {
    this.socket.on('updateUsers', data => {
      const users = [];
      for (const u of data.users) {
        if (u.username !== this.username) {
          users.push(u.username);
        }
      }
      this.updateUsersEvent.emit(users);
    });

    this.socket.on('hand', data => {
      if (data.username === this.username) {
        this.handEvent.emit(data.hand);
      }
    });

    this.socket.on('callTrump', data => {
      if (data.username === this.username) {
        this.callTrumpEvent.emit(data.dealer === this.username);
      }
    });

    this.socket.on('setTrump', data => {
      const trump = { trump: data.trump, username: data.username };
      let hand = [];
      for (const u of data.users) {
        if (u.username === this.username) {
          hand = u.hand;
        }
      }
      this.setTrumpEvent.emit({ trump, hand });
    });
  }

  public emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

}
