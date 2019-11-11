import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes:any = [];

  counter = 0;

constructor(private router:Router, private storage:Storage) { 
   
}
  ngOnInit() {
    this.counter = this.notes.length;
    this.storage.get("Notes").then(response=>{
      this.notes = response;
      console.log(this.notes);
    })
  }
  createNote(){
    this.router.navigate(["/app/tabs/notes/create-note"]);
  }

  getClass(index){
    console.log(index)
    
    if((index % 2 == 0)){

      return {isWhite:true};

    }

    console.log(index);
  }

  noteDetails(note, id){
    let navigationExtras: NavigationExtras = {
      state: {
        note:note
      }
    };

    this.router.navigate(['/app/tabs/notes/note-details/'+ id], navigationExtras);

  }

}
