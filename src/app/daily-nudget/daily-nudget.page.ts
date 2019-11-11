import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';

@Component({
  selector: 'app-daily-nudget',
  templateUrl: './daily-nudget.page.html',
  styleUrls: ['./daily-nudget.page.scss'],
})
export class DailyNudgetPage implements OnInit {

  nudgets:any = []
  constructor(private service:UserAuthService) {
     this.service.getDailyNuget().subscribe(response => {
       this.nudgets = response['data'];
       console.log(this.nudgets);
      });
   }
  ngOnInit() {
  }

}
