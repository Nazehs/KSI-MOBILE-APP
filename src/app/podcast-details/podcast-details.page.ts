import { Component, OnInit, ViewChild } from '@angular/core';
import {
  StreamingMedia,
  StreamingVideoOptions,
  StreamingAudioOptions
} from '@ionic-native/streaming-media/ngx';
import { Howl, Howler } from 'howler';
import { log } from 'util';
import { IonRange } from '@ionic/angular';
@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.page.html',
  styleUrls: ['./podcast-details.page.scss']
})
export class PodcastDetailsPage implements OnInit {
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

@ViewChild('progressBarRange', {static: false})progressBarRange: IonRange;
  constructor(private streamingMedia: StreamingMedia) {}
  // mediaType;
  // testUrl = 'https://www.youtube.com/watch?v=ELz2h7OxGJo';

  // playMedia(){
  //   let options: StreamingVideoOptions = {
  //     successCallback: () => { console.log('Video played') },
  //     errorCallback: (e) => { console.log('Error streaming') },
  //     orientation: 'portrait',
  //     shouldAutoClose: true,
  //     controls: false
  //   };

  //   this.streamingMedia.playVideo(this.testUrl, options);
  // }

  // playAudio(){
  //   let options: StreamingAudioOptions = {
  //     successCallback: () => { console.log('Video played') },
  //     errorCallback: (e) => { console.log('Error streaming') },
  //     initFullscreen:false
  //   };

  //   this.streamingMedia.playAudio(this.testUrl, options);
  // }

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
        this.updateProgressBar()
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

    setTimeout(()=>{
      this.updateProgressBar()
    }, 1000);

  };

  ngOnInit() {}
}
