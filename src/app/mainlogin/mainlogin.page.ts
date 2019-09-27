import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'mainlogin',
  templateUrl: './mainlogin.page.html',
  styleUrls: ['./mainlogin.page.scss'],
})
export class MainloginPage implements OnInit {
  
  login: UserOptions = { username: '', password: '' };

    submitted = false;

  constructor(public userData:UserData,
    public router:Router) {  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
      if (form.valid) {
        this.submitted = true;
        console.log(this.login.username);
      this.userData.login(this.login.username,this.login.username);
      // this.router.navigateByUrl('/app/tabs/posts');
    }
  }
  appLogin(forms:NgForm){      
      // if(forms.valid){
      //   console.log(this.login.username);
      //   this.submitted=true;
      //   // this.userData.login(this.login.username,this.login.password);
      //   // this.userData.login(this.login.password);
      //   // navigate to the main page if success.
      //   // this.router.navigateByUrl('/app/tabs/posts');
      // }

      this.submitted = true;

      if (forms.valid) {
          console.log(this.login.username);
            console.log(this.login.password);
        this.userData.login(this.login.username,this.login.password);
        // this.router.navigateByUrl('/app/tabs/posts');
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
