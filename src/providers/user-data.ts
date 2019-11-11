import { Injectable, ɵConsole } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  userLogins ={
  username:'',
  password:''
};


  constructor(
    public events: Events,
    public storage: Storage,
    private router:Router
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

  // login(username: string, password:string): Promise<any> {
  //     return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
  //     this.setUsername(username,password);
  //     return this.events.publish('user:login');
  //   });
  // }

  // signup(username: string,password:string): Promise<any> {
  //   return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
  //     this.setUsername(username,password);
  //     // this.events.publish('user:logout');
  //     return this.events.publish('user:signup');
  //   });
  // }

  // logout(): Promise<any> {
  //   return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
  //     return this.storage.remove('userdetails');
  //   }).then(() => {
  //     this.events.publish('user:logout');
  //     this.router.navigate(["/app/tabs/home"]);
  //   });
  // }

  // setUsername(username: any,password:any):Promise<any> {
    
  //   this.userLogins.password=password;
  //     // console.log(password);
  //     // console.log(username);
  //   this.userLogins.username=username;
  //   // console.log(this.userLogins,'details');
  //   return this.storage.set('userdetails', JSON.stringify(this.userLogins));
  // }

  // getUsername(): Promise<string> {
  //   return this.storage.get('userdetails').then((value) => {
  //     return value;
  //   });
  // }

  // isLoggedIn(): Promise<boolean> {
  //   return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
  //     console.log('====================================');
  //     console.log(value);
  //     console.log('====================================');
  //     return value === true;
  //   });
  // }

  // checkHasSeenTutorial(): Promise<string> {
  //   return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
  //     return value;
  //   });
  // }


  login(username: string, password: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username, password);
      return this.events.publish('user:login');
    });
  }

  signup(username: string,password:string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username, password);
      return this.events.publish('user:signup');
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('userLoggedin');
    }).then(() => {
      this.events.publish('user:logout');
    });
  }

  setUsername(username: any,password:any): Promise<any> {
    const userDetails = {
      username: username,
      password:password
    }
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
}
