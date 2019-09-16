import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";


@Component({
  selector: 'editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  userDetails:any;
public  data:any = {
    name: null,
    mobile: null,
    address: null,
    sex: null,
    email:null
  };
  

  // data;
  getData = null;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}


  ngOnInit() {
    // $(".js-demo-1").find("input").ionCheckRadio();
    this.getData = this.navParams.get("data_details");
    this.getData = this.navParams.get("data_details");
    this.userDetails = this.navParams.get('userDetails');
    this.data.name = this.userDetails.name
    this.data.mobile = this.userDetails.mobile
    this.data.address = this.userDetails.address
    this.data.email = this.userDetails.email
    this.data.sex = this.userDetails.sex
    console.log(this.userDetails);
    console.log(this.data);
    console.log(`${this.data.name}`);
    if(this.data.sex === 'Male'){
      console.log('Maleee');
      
    }else{
      console.log('feeeeMaleee');
    }
  }

  cancelModal() {
    this.modalController.dismiss();
  }
  onChangeHandler($event) {
    this.data.sex = $event.target.value;
  }
  ionViewWillEnter() {
    this.getData = this.navParams.get("data");
    console.log(this.getData);
    // this.myOtherParameter = this.navParams.get('otherParameter');
  }

  async submitModal() {
    // const result = this.content;
    // this.data.sex = sex;
    // this.optionsSelected.size.medium,
    // this.optionsSelected.size.xtralarge

    // this.optionsSelected.color.red
    // this.optionsSelected.color.green
    // this.optionsSelected.color.purple

    // this.optionsSelected.qty.quantity
    this.data.email;
    this.data.name;
    this.data.mobile;
console.log('submitted');
    await this.modalController.dismiss(this.data);
  }
}
