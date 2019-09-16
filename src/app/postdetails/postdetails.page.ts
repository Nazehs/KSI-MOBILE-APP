import { Component,ViewEncapsulation, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KsiSampleData } from '../../providers/ksi-sample-data';

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
 

}
