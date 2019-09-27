import { VersesPageModule } from './../verses/verses.module';
import { RequestsPageModule } from './../requests/requests.module';
import { DashboardPageModule } from './../dashboard/dashboard.module';
import { BookmarkPageModule } from './../bookmark/bookmark.module';
import { InsightPageModule } from './../insight/insight.module';
import { MotivationPageModule } from './../motivation/motivation.module';
import { LovePageModule } from './../love/love.module';
import { PrayersPageModule } from './../prayers/prayers.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs-page";
import { HomePage } from '../home/home.page';
import { SchedulePage } from "../schedule/schedule";
import { HomePageModule } from '../home/home.module';
// import { PostsPage } from "../../pages/posts/posts.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: "",
            component: HomePage
          }
        ]
      },
      {
        path: "home",
        children: [
          {
            path: "",
            component: HomePage
          },
          // {
          //   path: "single-post/:postId",
          //   loadChildren:() => import('../single-post/single-post.module').then(m => m.SinglePostPageModule)
          // }
        ]
      },
      {
        path: "schedule",
        children: [
          {
            path: "",
            component: SchedulePage
          },
          {
            path: "session/:sessionId",
            loadChildren:
              "../session-detail/session-detail.module#SessionDetailModule"
          }
        ]
      },
      {
        path: "speakers",
        children: [
          {
            path: "",
            loadChildren:
              "../speaker-list/speaker-list.module#SpeakerListModule"
          },
          {
            path: "session/:sessionId",
            loadChildren:
              "../session-detail/session-detail.module#SessionDetailModule"
          },
          {
            path: "speaker-details/:speakerId",
            loadChildren:
              "../speaker-detail/speaker-detail.module#SpeakerDetailModule"
          }
        ]
      },
      {
        path: "journeys",
        loadChildren: "../journeys/journeys.module#JourneysPageModule"
      },
      {
        path: "dashboards",
        children: [
          {
            path: "",
            // loadChildren: "../journeys/journeys.module#JourneysPageModule"
            loadChildren:()=>import('../dashboards/dashboards.module').then(m => m.DashboardsPageModule)
          },
          {
            path: "bookmark",
            loadChildren:()=>import('../bookmark/bookmark.module').then(m => m.BookmarkPageModule) 
          },
          {
            path: "prayers",
            loadChildren:()=>import(('../prayers/prayers.module')).then(m => m.PrayersPageModule)
          },
          { path: "love", loadChildren: ()=>import(('../love/love.module')).then(m => m.LovePageModule) },
          {
            path: "motivation",
             loadChildren: ()=>import(('../motivation/motivation.module')).then(m => m.MotivationPageModule)
          },
          {
            path: "insight",
            loadChildren: ()=>import(('../insight/insight.module')).then(m => m.InsightPageModule)
          },
          {
            path: "requests",
            loadChildren: ()=>import(('../requests/requests.module')).then(m => m.RequestsPageModule)
          },
          {
            path: "verses",
            loadChildren:()=>import(('../verses/verses.module')).then(m => m.VersesPageModule)
          },
        ]
      },
      {
        path: "settings",
        loadChildren: "../settings/settings.module#SettingsPageModule"
      },
      {
        path: "bookmark",
        children: [
          {
            path: "",
            loadChildren: "../bookmark/bookmark.module#BookmarkPageModule"
          }
        ]
      },
      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: "../about/about.module#AboutModule"
          }
        ]
      },
      {
        path: "devotions",
        children: [
          {
            path: "",
            loadChildren: "../devotions/devotions.module#DevotionsPageModule"
          }
        ]
      },
      {
        path: "generals",
        loadChildren: "./generals/generals.module#GeneralsPageModule"
      },
      { path: "plans", loadChildren: "./plans/plans.module#PlansPageModule" },
    
      // { path: "plans", loadChildren: "../plans/plans.module#PlansPageModule" },
      {
        path: "generals",
        loadChildren: "./generals/generals.module#GeneralsPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
