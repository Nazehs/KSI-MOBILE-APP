import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-inspire-impact',
  templateUrl: './inspire-impact.page.html',
  styleUrls: ['./inspire-impact.page.scss'],
})
export class InspireImpactPage implements OnInit {
    podcast:any = [];

    counter = 0;

  constructor() { 
        this.counter = this.podcast.length;
  }

  ngOnInit() {
  }

}
