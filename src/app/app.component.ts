import { Component, OnInit } from '@angular/core';
import { Platform, Events, ToastController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserData } from 'src/providers/user-data';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Storage } from '@ionic/storage';
import { timer } from 'rxjs';
import {initializeApp} from 'firebase';
// require('firebase/database');

const config = {
  apiKey: 'AIzaSyA8TfkyZs_m_bfZYPy1Byo2Z9wm-i4ktis',
  authDomain: 'kingdomsupportinitiatives.firebaseapp.com',
  databaseURL: 'https://kingdomsupportinitiatives.firebaseio.com/',
  projectId: 'kingdomsupportinitiatives',
  storageBucket: 'kingdomsupportinitiatives.appspot.com',
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent  implements OnInit {

  loggedIn = false;
  dark = false;
appPages = [
    {

      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    },
    {
      title: 'Daily Devotional',
      url: '/app/tabs/home',
      icon: 'stopwatch'
    },
    {
      title: 'PUSH Network',
      url: '/app/tabs/dashboards/push-network',
      icon: 'flame'
    },
    {
      title: 'Podcast- Inspire Impact',
      url: '/app/tabs/inspire-impact',
      icon: 'microphone'
    }
  ];

  showSplash = true;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserData,
    private events: Events,
    private menu: MenuController,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }
  // ngOnInit(){
  //   this.isLoggedin();
  // }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  //   firebase.initializeApp(config);
  //   this.isLoggedin();
  // }

  // check if the user is loggedin or not
// isLoggedin(){
//   // loggedIn

//   // this.loggedIn = this.events.subscribe('user:login');

//      this.userService.isLoggedIn().then((value)=>{
//     this.loggedIn =value
//     if(this.loggedIn == null){
//       this.loggedIn = false;
//     }
//    });


//   console.log(this.loggedIn)
// }

// ionViewWillEnter(){
//   // this.isLoggedin();
//   console.log('home enetered');
//   this.isLoggedin();
// }
async ngOnInit() {
  this.checkLoginStatus();
  this.listenForLoginEvents();

  this.swUpdate.available.subscribe(async res => {
    const toast = await this.toastCtrl.create({
      message: 'Update available!',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: `Reload`
    });

    await toast.present();
    toast
      .onDidDismiss()
      .then(() => this.swUpdate.activateUpdate())
      .then(() => window.location.reload());
  });
}

initializeApp() {
  this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.statusBar.styleBlackTranslucent();
    // StatusBar.overlaysWebView(true);
    // StatusBar.backgroundColorByHexString("#333");
    // StatusBar.overlaysWebView(true);
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
    console.log(StatusBar);
}
    // this.splashScreen.hide();
    this.splashScreen.hide();  // <-- hide static image

    timer(3000).subscribe(() => this.showSplash = false);
  });
  initializeApp(config);
}

checkLoginStatus() {
  return this.userData.isLoggedIn().then(loggedIn => {
    return this.updateLoggedInStatus(loggedIn);
  });
}

updateLoggedInStatus(loggedIn: boolean) {
  setTimeout(() => {
    this.loggedIn = loggedIn;
  }, 300);
}

listenForLoginEvents() {
  this.events.subscribe('user:login', () => {
    this.updateLoggedInStatus(true);
  });

  this.events.subscribe('user:signup', () => {
    this.updateLoggedInStatus(true);
  });

  this.events.subscribe('user:logout', () => {
    this.updateLoggedInStatus(false);
  });
}

logout() {
  this.userData.logout().then(() => {
    return this.router.navigateByUrl('/app/tabs/home');
  });
}

openTutorial() {
  this.menu.enable(false);
  this.storage.set('ion_did_tutorial', false);
  this.router.navigateByUrl('/onboarding');
}

}
