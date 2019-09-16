import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { TutorialModule } from './tutorial/tutorial.module';
import { IonicStorageModule } from '@ionic/storage';  
import { SchedulePage } from './schedule/schedule';
import { ScheduleFilterPage } from './schedule-filter/schedule-filter';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent,
    // FormsModule, ReactiveFormsModule
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    // TutorialModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule, SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],

})
export class AppModule {}
