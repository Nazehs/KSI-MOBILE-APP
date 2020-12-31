import { AfterViewInit, Component, ViewEncapsulation , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  user:any;
  isEditModeEnable = false;
  userEdit =  {
    fullName: null,
    mobile: null,
    address: null,
    sex: null,
    email:null,
    userId: null,
    imgUrl:null
  };
    constructor(
      public alertCtrl: AlertController,
      public router: Router,
      public userData: UserData,
      private storage : Storage,
      private userService : UserData,

      private toast: ToastController
    ) { 
      this.storage.get('userLoggedin').then((data)=>{
              
        this.userEdit= data[0];
      })
    }
  
    ngAfterViewInit() {
    
    }
  
    updatePicture() {
      console.log('Clicked to update picture');
    }
  
  
    logout() {
      this.userData.logout();
      this.router.navigateByUrl('/login');
    }
  
    navigateEdit(){
      this.router.navigate(['/edit-profile']);
    }
  
    onChangeHandler($event) {
      this.user.sex = $event.target.value;
    }
  
    enableEditMode = ()=>{
      this.isEditModeEnable = true;
    }
  
    updateUserDetails = (data) => {
      console.log(data);
      this.userService.updateProfile(this.userEdit).subscribe((response)=>{
        console.log(response);
        this.isEditModeEnable = false;
        this.presentToast();
      })
  
    }

    async presentToast() {
      const toast = await this.toast.create({
        message: 'Your update was saved successfully!',
        duration: 2000
      });
      toast.present();
    }
  
    cancelledUpdate = (data) =>{
      console.log(data);
      if(data){
        this.isEditModeEnable = false;
      }
    }

    ngOnInit(){}
}
