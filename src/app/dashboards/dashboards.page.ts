import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { EditprofilePage } from "../editprofile/editprofile.page";
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: "dashboards",
  templateUrl: "./dashboards.page.html",
  styleUrls: ["./dashboards.page.scss"]
})
export class DashboardsPage implements OnInit {
  today: any;

  data= 30;

  public  userDetails:any;

  constructor(private router: Router, private storage:Storage, private modalContoller: ModalController) {
    this.today = Date.now();
    console.log(this.today);
    this.storage.get('userLoggedin').then((data)=>{
              
      this.userDetails= data[0];
    })
  }

  ngOnInit() {}
  navPrayers() {
    this.router.navigateByUrl("/app/tabs/dashboards/prayers");
  }

  navInsight() {
    this.router.navigateByUrl("/app/tabs/dashboards/insight");
  }
  navDailyVerses() {
    this.router.navigateByUrl("/app/tabs/dashboards/daily-verse");
  }

  wordClips() {
    this.router.navigateByUrl("/app/tabs/dashboards/word-clips");
  }
  navConnects() {
    this.router.navigateByUrl("/app/tabs/dashboards/chatroom-list");
  }
  navPushNetwork() {
    this.router.navigateByUrl("/app/tabs/dashboards/push-network");
  }
  navDailyNudget() {
    this.router.navigateByUrl("/app/tabs/dashboards/daily-nudget");
  }


  editProfile(){
    this.router.navigate(['/app/tabs/dashboards/accounts']);
  }
  navLove(){}
}
