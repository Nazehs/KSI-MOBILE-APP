import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ChatromPage } from '../chatrom/chatrom.page';
import { UserAuthService } from 'src/providers/User.Auth.Service';

@Component({
  selector: 'app-chatrom-list',
  templateUrl: './chatrom-list.page.html',
  styleUrls: ['./chatrom-list.page.scss'],
})
export class ChatromListPage implements OnInit {
  rooms = [];
  ref =  firebase.database().ref('chatrooms/');
  
  constructor(private router: Router, private navCtrl: NavController, private dataservice: UserAuthService ) {
    console.log(this.ref);
    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
      console.log(this.rooms)
    });
    console.log(this.rooms)
  }
  ngOnInit() {
  }

  addRoom(){
    this.router.navigateByUrl("/app/tabs/dashboards/create-chatroom");
  }
  
  joinRoom(key, roomName) {
    const room ={
      key:key,
      roomname: roomName
    }
  
    this.dataservice.setData(key, room);    
    this.router.navigate(["/app/tabs/dashboards/chatroom-list/chatroom/"+key]);
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