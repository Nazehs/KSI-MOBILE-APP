import { Component, ViewChild, OnInit } from '@angular/core';
// import { RoomPage } from '../room/room';
import * as firebase from 'Firebase';
// import {Content} from "@ionic/angular";
import { NavParams, NavController, IonContent,  } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chatrom',
  templateUrl: './chatrom.page.html',
  styleUrls: ['./chatrom.page.scss'],
})
export class ChatromPage implements OnInit {
  @ViewChild("scrollElement",{ static: false }) content: IonContent;

  data = { type:'', nickname:'', message:'' };
  chats = [];
  roomkey:string;
  nickname:string;
  offStatus:boolean = false;
  constructor(public navCtrl: NavController, private route: ActivatedRoute) {
    if(this.route.snapshot.data['roomKey']){
      const room = this.route.snapshot.data['roomKey'];
      console.log(room);
      this.roomkey = room.key;
      this.nickname = "Nazehs";
    }
    this.data.type = 'message';
    this.data.nickname = this.nickname;
  
    let joinData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    joinData.set({
      type:'join',
      user:this.nickname,
      message:this.nickname+' has joined this room.',
      sendDate:Date()
    });
    this.data.message = '';
  
    firebase.database().ref('chatrooms/'+this.roomkey+'/chats').on('value', resp => {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      setTimeout(() => {
        if(this.offStatus === false) {
          this.content.scrollToBottom(30);
        }
      }, 1000);
    });
  }
  ngOnInit(): void {};


  sendMessage() {
    let newData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    newData.set({
      type:this.data.type,
      user:this.data.nickname,
      message:this.data.message,
      sendDate:Date()
    });
    this.data.message = '';
  }


  exitChat() {
    let exitData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    exitData.set({
      type:'exit',
      user:this.nickname,
      message:this.nickname+' has exited this room.',
      sendDate:Date()
    });
  
    this.offStatus = true;  
    this.navCtrl.navigateRoot("/app/tabs/dashboards/chatroom-list");
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};