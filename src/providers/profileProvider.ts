import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})

export class ProfileProvider {
  base64img= '';
  url: 'http://vortexmobievotingapp.000webhostapp.com/imageUpload.php';

  constructor(public http: HttpClient) {

  }
  setImage(img) {
    this.base64img = img;
  }
  getImage() {
    return this.base64img;
  }
}
