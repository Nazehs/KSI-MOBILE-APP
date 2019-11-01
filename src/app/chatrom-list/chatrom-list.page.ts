import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ChatromPage } from '../chatrom/chatrom.page';

@Component({
  selector: 'app-chatrom-list',
  templateUrl: './chatrom-list.page.html',
  styleUrls: ['./chatrom-list.page.scss'],
})
export class ChatromListPage implements OnInit {
  rooms = [];
  ref =  firebase.database().ref('chatrooms/');
  
  constructor(private router: Router, public navCtrl: NavController) {
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
    // this.router.navigate([''])
  }
  
  joinRoom(key) {
    // this.navCtrl.setRoot(ChatromPage, {
    //   key:key,
    //   nickname:this.navParams.get("nickname")
    // });
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