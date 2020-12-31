import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/providers/User.Auth.Service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from "@ionic-native/file-opener/ngx";

@Component({
  selector: 'app-word-clips',
  templateUrl: './word-clips.page.html',
  styleUrls: ['./word-clips.page.scss'],
})
export class WordClipsPage implements OnInit {


  wordClips: any = [];
  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: deprecation
  // tslint:disable-next-line: max-line-length
  constructor(private fileopener: FileOpener, private service: UserAuthService, private socialSharing: SocialSharing, private fileTransfer: FileTransfer, private file: File) {
     this.service.getWordCLips().subscribe(response => {
       this.wordClips = response.data;
       console.log(this.wordClips);
      });

   }
  ngOnInit() {
  }

  compilemsg(wordClip): string {
    const msg = wordClip.caption + '\n' + wordClip.message + '\n';
    console.log(msg);

    return msg.concat('\n Stay focus with Jesus...');
  }
  shareWordClip(wordclip) {
    const parser = new DOMParser();
    const imgUrl = wordclip.imgUrl;
    const msg = this.compilemsg(wordclip);
    const parsedHtml = parser.parseFromString(msg, 'text/html');
    wordclip = parsedHtml.body.innerHTML;
    console.log(wordclip);
    this.socialSharing.share(msg,
      'Kingdom Support Initiatives Daily Nudgets', imgUrl
    );
  }


  downloadWordCLip(wordclip) {
    const url = encodeURI(wordclip.imgUrl);
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    console.log(wordclip);

    fileTransfer.download(url, this.file.externalRootDirectory + 'imageKsi.jpeg').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.fileopener.open(entry.toURL(), '');
    }, (error) => {
      // handle error
      console.log('error:', error);

    });
  }

}
