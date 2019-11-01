import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PodcastDetailsPage } from './podcast-details.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PodcastDetailsPage]
})
export class PodcastDetailsPageModule {}
