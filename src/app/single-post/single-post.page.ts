import { Component, ViewEncapsulation, OnInit, Sanitizer, Pipe, PipeTransform } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { KsiSampleData } from "../../providers/ksi-sample-data";
import { UserData } from "../../providers/user-data";
import { LoadingController } from "@ionic/angular";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: "single-post",
  templateUrl: "./single-post.page.html",
  styleUrls: ["./single-post.page.scss"]
})

@Pipe({
  name:'post.devotion'
})

export class SinglePostPage implements PipeTransform{
  isFavorite = false;
  post: any;
  defaultHref = "";
  
  constructor(
    private dataProvider: KsiSampleData,
    private router: Router,
    private loadingCtrl: LoadingController,
    private userProvider: UserData,
    private route: ActivatedRoute,
    public socialSharing: SocialSharing,
    private sanitizer:DomSanitizer
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log(this.isFavorite);
    
    this.dataProvider.load().subscribe((data: any) => {
      const postId = this.route.snapshot.paramMap.get("postId");
      if (data) {
        console.log("PostId inside: ", postId);
        for (const post of data) {
          if (post && post.id == postId) {
            this.post = post;
            console.log('post goes here', post.title);
            this.isFavorite = this.userProvider.hasFavorite(
              this.post.title
            );
           
          }
          console.log('favourite: ',this.isFavorite);
        }
      }
    });
  }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleFavorite() {
    console.log(this.post.title);    
    if (this.userProvider.hasFavorite(this.post.title)) {
      this.userProvider.removeFavorite(this.post.title);
      this.isFavorite = false;
      console.log(this.post.title);
    } else {
      console.log(this.post.title);
      this.userProvider.addFavorite(this.post.title);
      this.isFavorite = true;
    console.log('vvv',this.isFavorite);
    
    }
  }
  compilemsg(index): string {
    var msg = this.post[index].body + "..." + this.post[index].title;
    return msg.concat(" \n Awesome !");
  }

  shareMedia(index) {
    var msg = this.compilemsg(index);
    this.socialSharing.canShareVia(msg, null, null, null);
  }
  whatsappShare(index){
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaWhatsApp(msg, null, null);
   }

  // this.socialSharing.canShareViaEmail().then(() => {
  //   // Sharing via email is possible
  // }).catch(() => {
  //   // Sharing via email is not possible
  // });
  // Check if sharing via email is supported
//   this.socialSharing.canShareViaEmail().then(() => {
//   // Sharing via email is possible
// }).catch(() => {
//   // Sharing via email is not possible
// });

// // Share via email
// this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
//   // Success!
// }).catch(() => {
//   // Error!
// });

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/posts`;
  }
  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: Math.random() * 1000 + 500
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }


  getDevotionLength(devotionText) {
    let words = devotionText.split(' ');
    let wordLength = words.length;
    return wordLength / 200 < 1 ? 1 : wordLength / 200;
    
  }
//  this.socialSharing.canShareVia().then(()=>{});

}
 