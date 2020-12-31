import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.scss'],
})
export class EditsComponent implements OnInit {
 @Input() userEdit: any;

 @Output() userDetails = new EventEmitter();

 @Output() cancelledUpdate = new EventEmitter();

  constructor() { 

    console.log(this.userEdit);
    
  }

  ngOnInit() {
    console.log(this.userEdit);
  }

  updateDetails = () => {
    this.userDetails.emit(this.userEdit);
  }

  cancelUpdate = () => {
    console.log('here');
    
    this.cancelledUpdate.emit({status:'cancelled'});
  }

  onChangeHandler($event) {

    this.userEdit.sex = $event.target.value;
    console.log(this.userEdit);
  }


}
