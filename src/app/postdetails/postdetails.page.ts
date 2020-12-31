import { Component,ViewEncapsulation, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KsiSampleData } from '../../providers/ksi-sample-data';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'postdetails',
  templateUrl: './postdetails.page.html',
  styleUrls: ['./postdetails.page.scss'],
})
export class PostdetailsPage implements OnInit {

  isFavorite = false;
  post:any;
  constructor( 
    private dataProvider: KsiSampleData,
    private router: Router,
    private socialSharing : SocialSharing,
    private route: ActivatedRoute) { }

    ngOnInit() {
    }
  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const postId = this.route.snapshot.paramMap.get('postId');
      if (data.posts) {
        console.log("PostId inside: ", postId);
        for (const post of data.posts) {          
          if (post && post.id == postId) {
            this.post = post;
            console.log(post);
            break;
          }
        }
      }
    });
  }
 
  socialNetWorkSHare(devotion){
    // Check if sharing via email is supported
this.socialSharing.canShareVia('KSI', devotion, 'subject', '',).then(response=>{
  console.log(response);
}).catch(error=>{
  console.error(error);
  
});

  }

}
