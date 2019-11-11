import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { UserAuthService } from 'src/providers/User.Auth.Service';

@Component({
  selector: 'mainlogin',
  templateUrl: './mainlogin.page.html',
  styleUrls: ['./mainlogin.page.scss'],
})
export class MainloginPage implements OnInit {
  
  login: UserOptions = { username: '', password: '' };

    submitted = false;

     // reset status
     isbusy = false;
    hasFailed = false;

  constructor(public userData:UserData,
    public router:Router, private userService: UserAuthService) {  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    // this.isLoggedin();
    console.log('yes');
  }
  
  onLogin(form: NgForm) {
      if (form.valid) {
        this.submitted = true;
        console.log(this.login.username);
      // this.userData.login(this.login.username,this.login.password);
       // reset status
        this.isbusy = true;
        this.hasFailed = false;
      
      // this.router.navigateByUrl('/app/tabs/posts');
    }else{
      this.hasFailed = true
    }
  }
  appLogin(forms:NgForm){      
      this.submitted = true;

      if (forms.valid) {
          // reset status
        this.isbusy = true;
        this.hasFailed = false;
        this.userData.login(this.login.username,this.login.password);
        this.userService.getUser(this.login).subscribe((response)=>{
          if(response != null){

            this.isbusy= false;
            console.log(response);
            // navigate to home page
            this.router.navigateByUrl('/app/tabs/home');

          }else{
            console.log('====================================');
            console.log('No user details!');
            console.log('====================================');
          }
        })
      }else{
        this.hasFailed = true;
      }
  }
  // navigate to sign up if no account
  appSignup(){
    this.router.navigateByUrl('/mainsignup');
  }
  // navigate to forgot password
  appForgotPass(){
    this.router.navigate(['/forgot-password']);
  }
}
