import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';

@Component({
  selector: 'app-push-network',
  templateUrl: './push-network.page.html',
  styleUrls: ['./push-network.page.scss'],
})
export class PushNetworkPage implements OnInit {

  prayers:any = []
  constructor(private service:UserAuthService) {
     this.service.getPrayers().subscribe(response => {
      //  response
       this.prayers= response['data'];
       console.log(response['data']);
      });
   }
  ngOnInit() {
  }
}
