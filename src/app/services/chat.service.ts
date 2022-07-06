import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }


  sendMessage(mensaje: String){
    const payload = {
      de: 'Guadalupe',
      cuerpo: mensaje,
      color: 'blue'
    };


    this.wsService.emit('mensaje', payload);
  }

  getMessage(){
    return this.wsService.listen('mensaje-nuevo');
  }
}
