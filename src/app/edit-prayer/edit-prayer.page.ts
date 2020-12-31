import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {  ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-prayer',
  templateUrl: './edit-prayer.page.html',
  styleUrls: ['./edit-prayer.page.scss'],
})
export class EditPrayerPage implements OnInit {
   isUpdate = false;
  prayer:any = {
    title: '',
    content: '',
    createdDate: null,
    userId: '',
    userName: '',
    pushnetworkid: null
  };

  constructor(  private toast: ToastController, private storage: Storage, private service: UserAuthService, private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe( _params => {

      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state);
         this.prayer = this.router.getCurrentNavigation().extras.state.prayer;
         console.log(this.prayer);
         if (this.prayer) {
           this.isUpdate = true;
         }

      } else {

        console.log('No state');
        console.log(this.prayer);
      }

    });

   }
  ngOnInit() {
  }

updatePrayer() {
    console.log(this.prayer);
    if (this.prayer.createdDate === null || this.prayer.userId === null) {
          this.prayer.createdDate = Date.now();
          this.prayer.pushnetworkid = Date.now();
          this.storage.get('userLoggedin').then(response => {
            console.log(response)
          this.prayer.userId = response[0].userId;
          this.prayer.userName = response[0].fullName;
        });
    }
    if( this.isUpdate === true){
       console.log(this.prayer);
    this.service.updatePrayer(this.prayer).subscribe(
      _details => {
   
        console.log('success:', _details);
        // navigate to pushnetwork page
        this.router.navigate(['/app/tabs/dashboards/push-network/']);
      },
      _err => {
        // throw this toast message error if not success
        console.log('error: ', _err)

      });
    }else{
      this.service.createPrayer(this.prayer).subscribe(
      _details => {
   
        console.log('success:', _details);
        // navigate to pushnetwork page
        // this.router.navigate(['/app/tabs/dashboards/push-network/']);
      },
      _err => {
        // throw this toast message error if not success
        console.log('error: ', _err)

      }
    );
    }
    
  }

  async showToast() {
  const toaster = await this.toast.create({
    message: 'Prayer was updated successfully!',
    position: 'bottom',
    duration: 3000
  });
  toaster.present();
}

}
