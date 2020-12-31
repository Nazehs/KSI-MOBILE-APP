import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ProfileProvider } from '../../providers/profileProvider';
import { NavController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { async } from 'q';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  base64img = '';
  // tslint:disable-next-line: max-line-length
  constructor(public profileProvider: ProfileProvider, private router: Router, public loadingCtrl: LoadingController, public nav: NavController, private transfer: FileTransfer, private file: File, private camera: Camera) {
    this.base64img = this.profileProvider.getImage();
    // console.log(this.base64img);
  }
ngOnInit() {

}
  imageCaptured() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((ImageData => {
      console.log(ImageData);
      this.base64img = 'data:image/jpeg;base64,' + ImageData;
      //  console.log(this.base64img);console.log(this.base64img);
    }), error => {
      console.log(error);
    });
  }

  imageCapturedGallery() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };

    this.camera.getPicture(options).then((ImageData => {
      console.log(ImageData);
      this.base64img = 'data:image/jpeg;base64,' + ImageData;
      //  console.log(this.base64img);
    }), error => {
      console.log(error);
    });
  }
  nextPage() {
    this.profileProvider.setImage(this.base64img);
    // this.nav.push('IdentifyphotoPage');
    console.log(this.base64img);
    this.router.navigate(['/pick-image']);
  }
  clear() {
    this.base64img = '';
  }

}
