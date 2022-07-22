import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { subscribeOn, Subscription } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy{
  texto='';
  mensajesSubscription: Subscription = new Subscription;

  mensajes: any [] = [];

  constructor(
    public chatService:ChatService
  ) { }

  ngOnInit() {
  this.chatService.getMessages().subscribe
  ( msg=>
    {
      this.mensajes.push(msg);
      console.log(msg);
    });
  }

  enviar(){
    this.chatService.sendMessage(this.texto);
    this.texto='';
  }
  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
    
    //borrraaaaaaarrrrr
    this.mensajesSubscription.unsubscribe();
  }

}
