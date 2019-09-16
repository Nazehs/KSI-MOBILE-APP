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
        path:'home',
        children:[
         { path:"",
          component:HomePage
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
            loadChildren: "../dashboards/dashboards.module#DashboardsPageModule"
          }
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
        loadChildren: "../generals/generals.module#GeneralsPageModule"
      },
      { path: "plans", loadChildren: "../plans/plans.module#PlansPageModule" },

      {
        path: "prayers",
        loadChildren: "../prayers/prayers.module#PrayersPageModule"
      },
      { path: "love", loadChildren: "../love/love.module#LovePageModule" },
      {
        path: "motivation",
        loadChildren: "../motivation/motivation.module#MotivationPageModule"
      },
      {
        path: "insight",
        loadChildren: "../insight/insight.module#InsightPageModule"
      },
      {
        path: "requests",
        loadChildren: "../requests/requests.module#RequestsPageModule"
      },
      {
        path: "verses",
        loadChildren: "../verses/verses.module#VersesPageModule"
      },
      // { path: "plans", loadChildren: "../plans/plans.module#PlansPageModule" },
      {
        path: "generals",
        loadChildren: "../generals/generals.module#GeneralsPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
