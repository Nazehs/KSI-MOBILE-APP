import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { NgForm} from '@angular/forms';
import { UserData } from '../../providers/user-data';

import { userSignUp } from '../../interfaces/user-options';

@Component({
  selector: 'mainsignup',
  templateUrl: './mainsignup.page.html',
  styleUrls: ['./mainsignup.page.scss'],
})
export class MainsignupPage implements OnInit {
   signsUps:userSignUp={
     email:'',
     fullName:'',
     password:'',
     passwordComfirm:''
   }

  constructor(public userData:UserData,public router:Router) { }

  ngOnInit() {
  }

  // sign up page 

  appSignUp(forms:NgForm){
        if(forms.valid){
          this.userData.signup(this.signsUps.fullName,this.signsUps.password);
          // this.userData.signup(this.signsUps.email);
          // this.userData.signup();
          // navigate to the schedules
          this.router.navigateByUrl('/app/tabs/posts');
        }
    console.log(forms);
    // if (this.forms.password === this.forms.passwordComfirm){

    // }
  }

  // redirect to login page
  appLogin(){
    this.router.navigateByUrl('/Mainlogin');
  }
}
