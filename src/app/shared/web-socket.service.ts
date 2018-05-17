import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  constructor() { }
  // 接收服务器返回的数据流
  createobservableSocke(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = event => observer.next(event.data);
        this.ws.onerror = event => observer.error(event);
        this.ws.onclose = () => observer.complete();
      }
    );
  }
  // 向服务器发送消息
  sendMessage(message: string) {
    this.ws.send(message);
  }

}
