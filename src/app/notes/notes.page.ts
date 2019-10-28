import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes:any = [];

  counter = 0;

constructor() { 
      this.counter = this.notes.length;
}
  ngOnInit() {
  }

}
