import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';

@Component({
  selector: 'app-word-clips',
  templateUrl: './word-clips.page.html',
  styleUrls: ['./word-clips.page.scss'],
})
export class WordClipsPage implements OnInit {

  
  wordClips:any = []
  constructor(private service:UserAuthService) {
     this.service.getWordCLips().subscribe(response => {
       this.wordClips = response['data'];
       console.log(this.wordClips);
      });
   }
  ngOnInit() {
  }

}
