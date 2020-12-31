import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from '@ionic/angular';
// import { ImageProvider } from '../../providers/image/image';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';
import { ProfileProvider } from 'src/providers/profileProvider';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
// @IonicPage()


@Component({
  selector: 'app-pick-image',
  templateUrl: './pick-image.page.html',
  styleUrls: ['./pick-image.page.scss'],
})
export class PickImagePage implements OnInit {

  base64img = '';
  userEdit: any;
  baseUrl: any = 'http://sixslatekays.com/dashboardksi/api/updateAvatar';
  // tslint:disable-next-line: max-line-length
  constructor(public loadingCtrl: LoadingController, private toast: ToastController, private router: Router, private storage: Storage,  public imgpov: ProfileProvider, public nav: NavController, private transfer: FileTransfer) {
    this.base64img = this.imgpov.getImage();
    this.storage.get('userLoggedin').then((data) => {

      this.userEdit = data[0];
    });

  }

 async  uploadPic() {
    const loader = await this.loadingCtrl.create({
      // content: "Uploading...."
      message: 'Uploading...'
    });
    loader.present();

    const fileTransfer: FileTransferObject = this.transfer.create();

    const options: FileUploadOptions = {
      fileKey: 'photo',
      fileName: this.userEdit.fullName + '_' + this.userEdit.userId,
      chunkedMode: false,
      mimeType: 'image/jpeg',
      headers: {}
    };
    console.log(this.userEdit);

    fileTransfer.upload(this.base64img, this.baseUrl, options).then(data => {
      // alert(JSON.stringify(data));

      const  {response} = data;

      const responseSplit = response.split(',');

      const urlSplit = responseSplit[3].split('"');

      this.userEdit.imgUrl = urlSplit[3];

      this.storage.set('userLoggedin', [this.userEdit] ).then(() => {
          loader.dismiss();
          this.router.navigate(['/app/tabs/dashboards']);
          this.showToast();
      });
    }, error => {
      alert('error');
      alert('error' + JSON.stringify(error));
      loader.dismiss();
    });
  }

  ngOnInit() {


  }

async showToast() {
  const toaster = await this.toast.create({
    message: 'profile update was done successfully!',
    position: 'bottom',
    duration: 3000
  });
  toaster.present();
}


}
