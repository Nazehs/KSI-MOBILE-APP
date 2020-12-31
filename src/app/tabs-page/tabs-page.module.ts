import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { HomePageModule } from '../home/home.module';
import { EditprofilePageModule } from '../editprofile/editprofile.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageModule,
    ReactiveFormsModule,
     FormsModule,
    TabsPageRoutingModule,
    EditprofilePageModule
    // PostsPageModule,
    // DashboardPageModule,
  ],
  declarations: [
    TabsPage,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class TabsModule { }
