import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
userLogins:{
  username:'',
  password:''
}


  constructor(
    public events: Events,
    public storage: Storage
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

  login(username: string, password:string): Promise<any> {
    console.log(password);
    console.log(username);
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      console.log(password);
      console.log(username);
      this.setUsername(username,password);
      return this.events.publish('user:login');
    });
  }

  signup(username: string,password:string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username,password);
      return this.events.publish('user:signup');
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('userdetails');
    }).then(() => {
      this.events.publish('user:logout');
    });
  }

  setUsername(username: any,password:any): Promise<any> {
    this.userLogins.password=password;
      console.log(password);
      console.log(username);
    this.userLogins.username=username;
    return this.storage.set('userdetails', JSON.stringify(this.userLogins));
  }

  getUsername(): Promise<string> {
    return this.storage.get('userdetails').then((value) => {
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
