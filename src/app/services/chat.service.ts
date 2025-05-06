import { Injectable } from '@angular/core';

import {} from '@angular/fire/firestore'

import { Firestore,collection, addDoc,collectionData, query,orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Message {
  user: string;
  content: string;
  createdAt: number;
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: Firestore) { }
  getMessage():Observable<Message[]>{
    const messageRef = collection(this.firestore, 'messages')
    const q=query(messageRef,orderBy('createdAt'))
    return collectionData(q,{idField:'id'}) as Observable<Message[]>
  }
  sendMessages(content:string,user:string){
    const messageRef = collection(this.firestore, 'messages');
    const message:Message={
      user,
      content,
      createdAt:Date.now()
    };
    return addDoc(messageRef,message)
  }
}