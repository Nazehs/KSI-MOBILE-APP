import { Component, ViewChild, OnInit } from '@angular/core';

import { NavParams, NavController, IonContent } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve, reject } from 'q';
const firebase = require('firebase');
require('firebase/database');

@Component({
  selector: 'app-chatrom',
  templateUrl: './chatrom.page.html',
  styleUrls: ['./chatrom.page.scss']
})
export class ChatromPage implements OnInit {
  @ViewChild('scrollElement', { static: false }) content: IonContent;

  data = { type: '', nickname: '', message: '' };
  chats = [];
  roomkey: string;
  nickname: string;
  offStatus = false;
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private storage: Storage
  ) {
    if (this.route.snapshot.data.roomKey) {
      const room = this.route.snapshot.data.roomKey;
      this.storage.get('userLoggedin').then(response => {
      // this.nickname = response[0].fullName;
      this.roomkey = room.key;
      this.data.nickname = response[0].fullName;

      this.data.type = 'message';
      // this.data.nickname = this.nickname;

      const joinData = firebase
        .database()
        .ref('chatrooms/' + this.roomkey + '/chats')
        .push();
      joinData.set({
        type: 'join',
        user: this.data.nickname,
        message: this.data.nickname + ' has joined this room.',
        sendDate: Date()
      });

      // console.log(joinData);
      this.data.message = '';

      firebase
        .database()
        .ref('chatrooms/' + this.roomkey + '/chats')
        .on('value', resp => {
          this.chats = [];
          this.chats = snapshotToArray(resp);
          setTimeout(() => {
            if (this.offStatus === false) {
              this.content.scrollToBottom(30);
            }
          }, 1000);
        });

      });

    }
  }
  async ngOnInit() {
    const user =  await this.getLoginStatus();
    console.log(user);
    if (this.route.snapshot.data.roomKey) {
      const room = this.route.snapshot.data.roomKey;
     
      // this.nickname = response[0].fullName;
      this.roomkey = room.key;
      this.nickname = user[0].fullName;
      this.data.nickname = this.nickname;

      this.data.type = 'message';
      // this.data.nickname = this.nickname;

      const joinData = firebase
        .database()
        .ref('chatrooms/' + this.roomkey + '/chats')
        .push();
      joinData.set({
        type: 'join',
        user: this.nickname,
        message: this.nickname + ' has joined this room.',
        sendDate: Date()
      });
      
      this.data.message = '';

      firebase
        .database()
        .ref('chatrooms/' + this.roomkey + '/chats')
        .on('value', resp => {
          this.chats = [];
          this.chats = snapshotToArray(resp);
          setTimeout(() => {
            if (this.offStatus === false) {
              this.content.scrollToBottom(30);
            }
          }, 1000);
        });
    }
  }

  public async getLoginStatus(){
    // tslint:disable-next-line: semicolon
    const user = await this.storage.get('userLoggedin');
    // console.log(user);
    return user;
  }

  sendMessage() {
    const newData = firebase
      .database()
      .ref('chatrooms/' + this.roomkey + '/chats')
      .push();
    newData.set({
      type: this.data.type,
      user: this.data.nickname,
      message: this.data.message,
      sendDate: Date()
    });
    this.data.message = '';
  }

  exitChat() {
    const exitData = firebase
      .database()
      .ref('chatrooms/' + this.roomkey + '/chats')
      .push();
    exitData.set({
      type: 'exit',
      user: this.nickname,
      message: this.nickname + ' has exited this room.',
      sendDate: Date()
    });

    this.offStatus = true;
    this.navCtrl.navigateRoot('/app/tabs/dashboards/chatroom-list');
  }
}

export const snapshotToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
