import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { promise } from "protractor";
import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Injectable({providedIn:'root'})

export class UserAuthService {
   apiUrl = "http://localhost:50/api/";
  isLoggedin: boolean;
  baseUrl: any ="http://sixslatekays.com/dashboardksi/api";
  users: unknown;
  userLogins ={
    username:'',
    password:''
  };
  private data = [];
  constructor(
    public events: Events,
    public storage: Storage,
    public http : HttpClient
  ) { }

 
  // get resolver data 
  getData(key){
    return this.data[key];
  }

  // set a resolver data 
  setData(key, data){
  this.data[key] = data;
  }
  // checking for loggin,
  isUserLoggedin(){
    if (localStorage.getItem('user') == null) {
      this.isLoggedin = false;
      return this.isLoggedin;

    } else {
      return true;
    }
  };

  getUser(user): Observable<any> {
    console.log("current user ", user);
    return this.http
      .post(
        `${this.baseUrl}/getlogin`,
        { data: user }
      )
      .pipe(
        map(res => {
         
          // this.posts.push(res['data']);
          this.setUsername(user)
          this.users = res;
          // return user available
          return this.users;
        }),
      );
  }


setUsername(user):Promise<any> {
    
  this.userLogins.password=user.username;
   
  this.userLogins.username=user.password;
  // console.log(this.userLogins,'details');
  return this.storage.set('userdetails', JSON.stringify(this.userLogins)).then((res)=>{
    // this.setUsername(user);
    return this.events.publish('user:login');
  });
}
 
  getDailyVerse(){
    return this.http.get(`${this.baseUrl}/getDailyVerses`).pipe(map((reponse)=>{
      return reponse
    }));
  }

  getDailyNuget(){
    return this.http.get(`${this.baseUrl}/getDailyNudget`).pipe(map((reponse)=>{
      return reponse
    }));
  }


  getPrayers(){
    return this.http.get(`${this.baseUrl}/getPushNetworks`).pipe(map((reponse)=>{
      return reponse
    }));
  }

  getWordCLips():Observable<any>{
    return this.http.get(`${this.baseUrl}/getWordClips`).pipe(map((reponse)=>{
      return reponse
    }));
  }


  getDailyWord(){
    return this.http.get(`${this.baseUrl}/getAllPrayers`).pipe(map((reponse)=>{
      return reponse
    }));
  }

  getPosts(){
    return this.http.get(`${this.baseUrl}/posts`).pipe(map((reponse)=>{
      return reponse
    }));
  }
}
