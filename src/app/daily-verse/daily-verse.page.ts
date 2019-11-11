import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';

@Component({
  selector: 'app-daily-verse',
  templateUrl: './daily-verse.page.html',
  styleUrls: ['./daily-verse.page.scss'],
})
export class DailyVersePage implements OnInit {

  verses:any = []
  constructor(private service:UserAuthService) {
     this.service.getDailyVerse().subscribe(response => {
       this.verses = response['data'];
       console.log(this.verses);
      });
   }
  ngOnInit() {
  }

}
