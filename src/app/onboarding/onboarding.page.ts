import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { ViewChild, OnInit, Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  showSkip = true;

  @ViewChild('slides', {static:false}) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {}

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/home')
      .then(() => this.storage.set('ion_did_tutorial', 'true'));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
    
      
      if (JSON.parse(res) === true) {
        this.router.navigateByUrl('/app/tabs/home');
      }else{
        return;
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
  ngOnInit() {
    // return forkJoin()
  }

}
