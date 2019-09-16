import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardsPage } from './dashboards.page';
import { EditprofilePage } from '../editprofile/editprofile.page'



const routes: Routes = [
  {
    path: '',
    component: DashboardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // EditprofileModalPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardsPage]
})
export class DashboardsPageModule {}
