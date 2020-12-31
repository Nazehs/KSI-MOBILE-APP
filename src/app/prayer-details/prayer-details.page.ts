import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from 'src/providers/user-data';

@Component({
  selector: 'app-prayer-details',
  templateUrl: './prayer-details.page.html',
  styleUrls: ['./prayer-details.page.scss']
})
export class PrayerDetailsPage implements OnInit {
  prayer: any;
  constructor(private router: Router, private routes: ActivatedRoute, private userService: UserData) {
    this.routes.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.prayer = this.router.getCurrentNavigation().extras.state.prayer;
        console.log(this.prayer);
        // this.getFullName(this.prayer.userId);

      }
    });
  }

  ngOnInit() {}
}
