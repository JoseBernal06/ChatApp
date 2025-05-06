import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {
  messages: Message[] = [];
  newMensaje: string = '';
  user: string = 'Usuario';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessage().subscribe((msgs) => {
      this.messages = msgs;
    });
  }
  
  sendMessage() {
    if (this.newMensaje.trim()) {
      this.chatService.sendMessages(this.newMensaje, this.user)
      this.newMensaje = '';
    }
  }
}
