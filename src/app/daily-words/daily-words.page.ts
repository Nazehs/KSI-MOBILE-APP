import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';

@Component({
  selector: 'app-daily-words',
  templateUrl: './daily-words.page.html',
  styleUrls: ['./daily-words.page.scss'],
})
export class DailyWordsPage implements OnInit {

   wordClips:any = []
  constructor(private service:UserAuthService) {
    this.wordClips = this.service.getWordCLips();
    console.log(this.wordClips);
   }

  ngOnInit() {
  }



}
