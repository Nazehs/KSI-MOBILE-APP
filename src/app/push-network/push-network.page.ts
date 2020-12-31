import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../providers/User.Auth.Service';
import { Router, NavigationExtras } from '@angular/router';
import {  ToastController } from '@ionic/angular';

@Component({
  selector: 'app-push-network',
  templateUrl: './push-network.page.html',
  styleUrls: ['./push-network.page.scss'],
})
export class PushNetworkPage implements OnInit {

  prayers: any = [];
  constructor(private service: UserAuthService, private toast:ToastController, private router: Router) {
   this.getPushNetworks();
  }
  ngOnInit() {
  }

  navigateDetails(param ) {

    const navigationExtras: NavigationExtras = {
      state: {
        prayer: param
      }
    };

    this.router.navigate(['/app/tabs/dashboards/push-network/prayer-details'], navigationExtras);
  }

  EditPrayer(param?:any) {
  const navigationExtras: NavigationExtras = {
      state: {
        prayer: param
      }
    };

      (param===undefined) ? this.router.navigate(['/app/tabs/dashboards/push-network/edit-prayer']) : this.router.navigate(['/app/tabs/dashboards/push-network/edit-prayer'], navigationExtras);;
    
  }

  getPushNetworks(){
      this.service.getPrayers().subscribe(response => {
      //  response
       this.prayers = response['data'];
       console.log(response['data']);
      });
   }
  

  deletePrayer(id) {
    console.log(id);
    const result = confirm('This will delete this Prayer point??');
    if (result) {
      this.service.deletePrayers(+id).subscribe(
        res => {
      console.log('success:' ,res);
      this.getPushNetworks();
      this.showToast();
        },
        err => {
          console.log('Error:',  err);
        }
      );
    }
  }

   async showToast() {
  const toaster = await this.toast.create({
    message: 'Prayer was deleted successfully!',
    position: 'bottom',
    duration: 3000
  });
  toaster.present();
}
}
