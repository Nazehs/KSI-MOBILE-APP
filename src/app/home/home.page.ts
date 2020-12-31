import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
// import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ActionSheetController, IonItemSliding } from '@ionic/angular';
import {
  AlertController,
  IonList,
  LoadingController,
  ModalController,
  ToastController
} from '@ionic/angular';
import { KsiSampleData } from '../../providers/ksi-sample-data';
import { UserData } from '../../providers/user-data';
import { log } from 'util';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController,
    public confData: KsiSampleData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    // public inAppBrowser: InAppBrowser,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    private alertCtrl: AlertController
  ) { }
  // making reference to the post elements
  // @ViewChild('postList') postList: IonList;
  @ViewChild('slidingItem', { static: true }) devotionList: IonItemSliding;

  // variables
  posts: any = [];
  postsLoaded: any = [];
  colors: any = [];
  dayIndex = 0;
  queryText = '';
  // segment = 'all';
  // excludeTracks: any = [];
  shownSessions: any = [];
  // groups: any = [];
  confDate: string;
  segment = 'all';
  excludeTracks: any = [];
  isloggedIn;



  ngOnInit() {
    this.updatePosts();
    // this.itemColor();
  }

  ionViewWillEnter() {

   this.isloggedIn = this.user.isLoggedIn();

  }
  updatePosts() {
    if (this.devotionList) {
      //  closing all open sliding items when the posts updates
      this.devotionList.closeOpened();
      ;
      console.log('.....');
    }
    // this.confData.getPosts().subscribe((posts: any[]) => {
    // console.log("Posts: ", posts);
    this.confData
      .getTimeline(
        this.dayIndex,
        this.queryText,
        this.excludeTracks,
        this.segment
      )
      .subscribe((data: any) => {
        this.shownSessions = data.shownSessions;
        // this.groups = data.groups;
        console.log('data:', data);

        this.posts = data;
        this.postsLoaded = data;
        console.log('session count', this.shownSessions);
      });
    // });
  }
  // loading the posts
  initializeItems(): void {
    // resetin the post to the searched value
    this.posts = this.postsLoaded;
  }


  filteredPosts(searchbar) {
    // reseting all items
    this.initializeItems();

    // search bar values
    const postSearch = searchbar.srcElement.value;

    if (!postSearch) {
      return;
    }
    // filtering the posts
    this.posts = this.posts.filter(post => {
      // checking for the post author or title
      if ((post.author && postSearch) || (post.title && postSearch)) {
        if (
          // post.author.toLowerCase().indexOf(postSearch.toLowerCase()) > -1 ||
          post.title.toLowerCase().indexOf(postSearch.toLowerCase()) > -1
        ) {
          return true;
        }
        return false;
      }
    });
    // logging the search output
    console.log(postSearch, this.postsLoaded.length);
  }

  async addFavorite(slidingItem: IonItemSliding, sessionData: any) {
    if (this.user.hasFavorite(sessionData.title)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, sessionData, 'Devotion Already Added To Favorites');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.title);

      // create an alert instance
      const alert = await this.alertCtrl.create({
        header: 'Favorite Added',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              // close the sliding item
              slidingItem.close();
            }
          }
        ]
      });
      // now present the alert on top of all other content
      await alert.present();
    }
  }

  async removeFavorite(
    slidingItem: IonItemSliding,
    sessionData: any,
    title: string
  ) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this devotion from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.title);
            this.updatePosts();

            // close the sliding item and hide the option buttons
            slidingItem.close();

          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.updatePosts();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


}
