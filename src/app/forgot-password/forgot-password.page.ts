import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
   // redirect to login page
   resetPassword(){
    this.router.navigateByUrl('/mainlogin');
  }

}
