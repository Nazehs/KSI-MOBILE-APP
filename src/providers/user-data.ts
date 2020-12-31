import { Injectable, ɵConsole } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  userLogins = {
  username: '',
  password: ''
};
  users: any;
  baseUrl: any = 'http://sixslatekays.com/dashboardksi/api';

  constructor(
    public events: Events,
    public storage: Storage,
    private router: Router,
    private http: HttpClient,

  ) { }

  hasFavorite(postName: string): boolean {
    console.log(postName);
    console.log(this._favorites.indexOf(postName));

    return (this._favorites.indexOf(postName) > -1);

  }

  addFavorite(postName: string): void {
    console.log(postName);
    this._favorites.push(postName);
    console.log(this._favorites);

  }

  removeFavorite(postName: string): void {
    const index = this._favorites.indexOf(postName);
    if (index > -1) {
      this._favorites.splice(index, 1);
      console.log(this._favorites);
    }
  }

  login(userDetails): Observable<any> {
    return this.http
    .post(
      `${this.baseUrl}/getlogin`,
      { data: userDetails }
    )
    .pipe(
      map(res => {
       console.log(res,'serve response');
       this.users = res;
       if (res !== null && res !== undefined && this.users.length >= 1 ) {
          return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(userDetails);
            // this.users = res;
            this.setUsername(res);
            return this.events.publish('user:login');

          });
        }else{
          return {status:'failed', loggedin:false}
        }

        // // return user available
        // return this.users;
      }),
    );

  }

  getUser(user): Observable<any> {
    console.log('current user ', user);
    return this.http
      .post(
        `${this.baseUrl}/getlogin`,
        { data: user }
      )
      .pipe(
        map(res => {

          // this.posts.push(res['data']);
          this.users = res;
          this.setUsername(res);
          // return user available
          return this.users;
        }),
      );
  }

  // signup(userDetails): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/storeUser`, {data: userDetails}).pipe(map((response) => {
  //     // return response;
  //     // return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
  //     //   this.setUsername(userDetails);
  //     //   return this.events.publish('user:signup');
  //     // });

  //   }));

  // }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('userLoggedin');
    }).then(() => {
      this.events.publish('user:logout');
    });
  }

  setUsername(userDetails): Promise<any> {
    // const userDetails = userDetails
    return this.storage.set('userLoggedin', userDetails);
  }

  getUsername(): Promise<string> {
    return this.storage.get('userLoggedin').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }

  signup(user): Observable<any> {
    console.log('current user ', user);
    return this.http
      .post(
        `${this.baseUrl}/storeUser`,
        { data: user }
      )
      .pipe(
        map(res => {

          // this.posts.push(res['data']);
          this.users = res;
          this.setUsername([this.users]);
          // return user available
          return this.users;
        }),
      );
  }


  updateProfile = (user) => {
    return this.http
      .post(
        `${this.baseUrl}/updateUser`,
        { data: user }
      )
      .pipe(
        map(res => {
          // updateAvatar
          // this.posts.push(res['data']);
          this.users = res['data'];
          this.setUsername([this.users]);
          // return user available
          return this.users;
        }),
      );
  }


  

}
