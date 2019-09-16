import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  appPages = [
    {
      title: "Dashboard",
      url: "/app/tabs/dashboards",
      icon: "stats"
    },
    {
      title: "Bookmark",
      url: "/app/tabs/bookmark",
      icon: "bookmark"
    },
    {
      title: "Settings",
      url: "/app/tabs/settings",
      icon: "options"
    },
    {
      title: "Generals",
      url: "/app/tabs/generals",
      icon: "paper"
    },
    {
      title: "Plans",
      url: "/app/tabs/plans",
      icon: "calendar"
    },
    {
      title: "Posts",
      url: "/app/tabs/posts",
      icon: "stopwatch"
    },
    {
      title: "Prayers",
      url: "/app/tabs/prayers",
      icon: "contacts"
    },
    {
      title: "Home",
      url: "/app/tabs/home",
      icon: "home"
    },

    {
      title: "My Devotions",
      url: "/app/tabs/devotions",
      icon: "calendar"
    },
    {
      title: "About",
      url: "/app/tabs/about",
      icon: "information-circle"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
