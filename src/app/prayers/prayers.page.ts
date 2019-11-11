import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';

@Component({
  selector: 'prayers',
  templateUrl: './prayers.page.html',
  styleUrls: ['./prayers.page.scss'],
})
export class PrayersPage implements OnInit {

  prayers:any = []
  constructor(private service:UserAuthService) {
     this.service.getPrayers().subscribe(response => {
       this.prayers = response['data'];
       console.log(this.prayers);
      });
   }
  ngOnInit() {
  }

}
