import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { NgForm} from '@angular/forms';
import { UserData } from '../../providers/user-data';

import { userSignUp } from '../../interfaces/user-options';
import { UserAuthService } from 'src/providers/User.Auth.Service';

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

  constructor(public userData:UserData,public router:Router, private userService:UserAuthService) { }

  ngOnInit() {
  }

  // sign up page 

  appSignUp(forms:NgForm){
        if(forms.valid){
          console.log(this.signsUps);
          if (this.signsUps.password === this.signsUps.passwordComfirm){
            this.userData.signup(this.signsUps.fullName,this.signsUps.password);
            console.log('====================================');
            console.log(this.signsUps);
            console.log('====================================');
           
            
            // navigate to the homepage
            this.router.navigateByUrl('/app/tabs/home');
            
          }else{
            console.log('====================================');
            console.log('password missmatch');
            console.log('====================================');
          }
        }else{
          return ;
        }
  }

  // redirect to login page
  appLogin(){
    this.router.navigateByUrl('/mainlogin');
  }

  appForgotPass() {
    this.router.navigate(['/forgot-password'])
  }
  
}
