import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-daily-nudget',
  templateUrl: './daily-nudget.page.html',
  styleUrls: ['./daily-nudget.page.scss']
})
export class DailyNudgetPage implements OnInit {
  nudgets: any = [];
  constructor(
    private service: UserAuthService,
    private socialSharing: SocialSharing
  ) {
    this.service.getDailyNuget().subscribe(response => {
      this.nudgets = response['data'];
      console.log(this.nudgets);
    });
  }
  ngOnInit() {}

  compilemsg(nudgets): string {
    const msg = nudgets.content + '\n' + nudgets.createdDate + '...';
    console.log(msg);

    return msg.concat('\n Stay focus with Jesus...');
  }
  shareNudget(nudget) {
    const parser = new DOMParser();
    const msg = this.compilemsg(nudget);
    const parsedHtml = parser.parseFromString(msg, 'text/html');
    nudget = parsedHtml.body.innerText;

    this.socialSharing.share(nudget,
      'Kingdom Support Initiatives Daily Nudgets'
    );
  }
}
