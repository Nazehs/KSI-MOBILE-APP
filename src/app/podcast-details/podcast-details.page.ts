import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.page.html',
  styleUrls: ['./podcast-details.page.scss'],
})
export class PodcastDetailsPage implements OnInit {
mediaType;
testUrl = "https://www.youtube.com/watch?v=ELz2h7OxGJo";
  constructor() { }

  ngOnInit() {
  }

}
