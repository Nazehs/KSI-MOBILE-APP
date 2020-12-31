import { Component, OnInit } from '@angular/core';
import {database} from 'Firebase';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-chatroom',
  templateUrl: './create-chatroom.page.html',
  styleUrls: ['./create-chatroom.page.scss'],
})
export class CreateChatroomPage implements OnInit {
  data = { roomname:'' };
  ref = database().ref('chatrooms/');
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  addRoom() {
    let newData = this.ref.push();
    newData.set({
      roomname:this.data.roomname
    });
    this.navCtrl.pop();
  }

}
