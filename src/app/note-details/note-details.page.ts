import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs';

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.page.html",
  styleUrls: ["./note-details.page.scss"]
})
export class NoteDetailsPage implements OnInit {
  note: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private storage: Storage
  ) {
    this.route.queryParams.subscribe(data => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.note = this.router.getCurrentNavigation().extras.state.note;
      } else {
        console.log("no state captured");
      }
    });
  }

  ngOnInit() {
    console.log(this.note);
  }

  createNote() {
    const navigationsOptionExtras: NavigationExtras = {
      state: {
        note: this.note
      }
    };

    this.router.navigate(
      ["/app/tabs/notes/create-note"],
      navigationsOptionExtras
    );
  }

  // deleteNote(id: number) {}

  async deleteNote(id: number) {
    const alert = await this.alertController.create({
      header: "Confirm Delete",
      // subHeader: 'Subtitle',
      message: "Are You sure you want to delete this note?",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            console.log("delete cancelled");
          }
        },
        {
          text: "Delete",
          handler: () => {
            this.deleteData(id);
            this.router.navigate(['/app/tabs/notes']);

          }
        }
      ]
    });

    await alert.present();
  }

  deleteData(id) {
    this.storage.get("Notes").then(response => {
      const notes = response.filter(notes => {
        return notes.createdDate !== id;
      });
      console.log(notes);
      this.storage.set("Notes", notes);
    });
  }
}
