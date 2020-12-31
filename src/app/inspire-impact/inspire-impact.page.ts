import { Component, OnInit, ViewChild } from '@angular/core';
import {StreamingMedia} from '@ionic-native/streaming-media/ngx';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-inspire-impact',
  templateUrl: './inspire-impact.page.html',
  styleUrls: ['./inspire-impact.page.scss'],
})
export class InspireImpactPage implements OnInit {
    podcast: any = [];

    counter = 0;

    playlist = [
      {
        filename: 'Acoustic Breeze',
        path: '/assets/podcasts/bensound-acousticbreeze.mp3'
      },
      {
        filename: 'Epic Sound',
        path: '/assets/podcasts/bensound-epic.mp3'
      },
      {
        filename: 'Going higher',
        path: '/assets/podcasts/bensound-goinghigher.mp3'
      },
      {
        filename: 'Epic Sound',
        path: '/assets/podcasts/bensound-onceagain.mp3'
      },
      {
        filename: 'Slow Motion Song',
        path: '/assets/podcasts/bensound-slowmotion.mp3'
      },
      {
        filename: 'Good Memories',
        path: '/assets/podcasts/bensound-memories.mp3'
      }
    ];

    isTrackctive = false;
    activeTrack = null;
    player: Howl = null;
    isPlaying = false;
  progressBar = 0;
  currentDate = Date.now();

  @ViewChild('progressBarRange', {static: false})progressBarRange: IonRange;
    constructor() {

      this.counter = this.playlist.length;
    }

  ngOnInit() {
  }

   startPodcast = song => {
    if (this.player) {
      this.player.stop();
    }

    this.player = new Howl({
      src: [song.path],
      html5: true,
      onplay: () => {
        console.log('is playing music');
        this.activeTrack = song;
        console.log(this.activeTrack);
        this.isPlaying = true;
        this.updateProgressBar();
      },
      onend: () => {
        console.log('is end music');
      }
    });

    this.player.play();
  }

  togglePlayer = pause => {
    console.log(pause);

    this.isPlaying = !pause;

    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  seek = () => {
   const currentValue: any = this.progressBarRange.value;
   console.log(currentValue);

   const duration = this.player.duration();
   this.player.seek(duration * (currentValue / 100));
  }

  next = () => {
    const index = this.playlist.indexOf(this.activeTrack);
    if (index !== this.playlist.length - 1) {
      this.startPodcast(this.playlist[index + 1]);
    } else {
      this.startPodcast(this.playlist[0]);
    }
  }

  prev = () => {
    const index = this.playlist.indexOf(this.activeTrack);

    if (index > 0) {
      this.startPodcast(this.playlist[index - 1]);
    } else {
      this.startPodcast(this.playlist[this.playlist.length - 1]);
    }
  }

  pausePodcast = () => {};

  updateProgressBar = () => {
    const seek =  this.player.seek();
    this.progressBar = (seek / this.player.duration()) * 100 || 0;

    setTimeout(() => {
      this.updateProgressBar();
    }, 1000);

  }

}
