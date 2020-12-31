import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserData } from "../../providers/user-data";
import { Events } from "@ionic/angular";
import { userSignUp } from "../../interfaces/user-options";
import { UserAuthService } from "src/providers/User.Auth.Service";

@Component({
  selector: "mainsignup",
  templateUrl: "./mainsignup.page.html",
  styleUrls: ["./mainsignup.page.scss"]
})
export class MainsignupPage implements OnInit {
  signsUps: userSignUp = {
    email: "",
    fullName: "",
    password: "",
    userid: null,
    passwordComfirm: ""
  };

  submitted = false;
  constructor(
    private events: Events,
    public userData: UserData,
    public router: Router,
    private userService: UserAuthService
  ) {}

  ngOnInit() {}

  // sign up page

  appSignUp(forms: NgForm) {
    if (forms.valid) {
      if (this.signsUps.password === this.signsUps.passwordComfirm) {
        this.signsUps.userid = Date.now();
        console.log(this.signsUps);
        this.userData.signup(this.signsUps).subscribe(response => {
          console.log(response);
          if (response !== null) {
            // navigate to the homepage
            this.router.navigateByUrl('/app/tabs/home');
            return this.events.publish("user:signup");
          }
        });
      } else {
        console.log("====================================");
        console.log("password missmatch");
        console.log("====================================");
      }
    } else {
      return;
    }
  }

  // redirect to login page
  appLogin() {
    this.router.navigateByUrl("/mainlogin");
  }

  appForgotPass() {
    this.router.navigate(["/forgot-password"]);
  }
}
