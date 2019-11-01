import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { EditprofilePage } from "../editprofile/editprofile.page";
import { OverlayEventDetail } from '@ionic/core';


@Component({
  selector: "dashboards",
  templateUrl: "./dashboards.page.html",
  styleUrls: ["./dashboards.page.scss"]
})
export class DashboardsPage implements OnInit {
  today: any;

  data= 30;

  public  userDetails:any = {
    name: 'Nazeh Abel',
    mobile: '08165089768',
    address: 'No 18a Mike Ijieze',
    sex: 'Male',
    email:'nazehabel@gmail.com'
  };

  constructor(private router: Router, private modalContoller: ModalController) {
    this.today = Date.now();
    console.log(this.today);
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

  async editProfile() {
    const modal = await this.modalContoller.create({
      component: EditprofilePage,
      cssClass: "editprofile_modal",
      componentProps: {
        data_details: this.data,
        userDetails:this.userDetails
      }
    });
    modal.onDidDismiss().then((details:OverlayEventDetail) => {
      if (details !== null){
        console.log('this details',details);
      }
    })
    return await modal.present();
  }


//   async openModal(){
//     const modal = await this.modalController.create({
//       component:ModalPage,
//       cssClass:'product_modal',
//       // showBackdrop:true,
//       componentProps:{
//         custum_id: this.xtralarge,
//         quantity: this.quantity
//       }
//     });
//     modal.onDidDismiss().then((detail: OverlayEventDetail) => {
//       if (detail !== null) {
//         console.log('The result:', detail.data);
//       }
//    });
//     return await modal.present();
// }
}
