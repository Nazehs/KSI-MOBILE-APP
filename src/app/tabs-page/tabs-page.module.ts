import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { HomePageModule } from '../home/home.module';
import { SchedulePage } from '../schedule/schedule';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageModule,
    
    TabsPageRoutingModule,
    // PostsPageModule,
    // DashboardPageModule,
  ],
  declarations: [
    TabsPage,
    SchedulePage,
  ]
})
export class TabsModule { }
