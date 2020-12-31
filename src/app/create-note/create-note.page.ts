import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Notes } from '../../interfaces/user-options';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.page.html',
  styleUrls: ['./create-note.page.scss']
})
export class CreateNotePage implements OnInit {
  isUpdate = false;
  notes:Notes = {
    title: '',
    note: '',
    createdDate: ''
  };
  constructor(private router: Router, private storage: Storage, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state) {

         this.notes = this.router.getCurrentNavigation().extras.state.note;
         console.log(this.notes);
         if (this.notes) {
           this.isUpdate = true;
         }

      } else {

        console.log('No state');
        console.log(this.notes);
      }

    });

   }


  ngOnInit() {

  }

  createNote(notes) {
    console.log(notes);
    console.log(this.notes);
    let notez;

    if (
      notes.title == null ||
      // tslint:disable-next-line: triple-equals
      notes.title == undefined ||
      notes.note == null ||
      // tslint:disable-next-line: triple-equals
      notes.note == undefined
    ) {
      return;
    } else {
      if (this.isUpdate == false) {

        notes.createdDate = Date.now();
      }else{
        notes.createdDate = this.notes.createdDate;
      }
      console.log(notes);
      // tslint:disable-next-line: prefer-const
      let noetesStorage: any;

      this.storage.get('Notes').then(response => {
        // tslint:disable-next-line: semicolon
        if(response !== null){
          
           notez = response.filter(notes => notes.createdDate != this.notes.createdDate);
        }
        noetesStorage = (notez !== null &&  notez!== undefined) ? notez : [];
        console.log(noetesStorage ,' expecting empty array for the first one');
        
        noetesStorage.push(notes);
      
        this.storage.set('Notes', noetesStorage);
        this.notes.note = '';
        this.notes.title = '';
        this.isUpdate = false;
        this.router.navigateByUrl('/app/tabs/notes');
      });

    }
  }
}
