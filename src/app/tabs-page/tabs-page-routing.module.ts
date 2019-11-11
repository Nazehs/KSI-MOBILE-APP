import { VersesPageModule } from './../verses/verses.module';
import { RequestsPageModule } from './../requests/requests.module';
import { DashboardPageModule } from './../dashboard/dashboard.module';
import { BookmarkPageModule } from './../bookmark/bookmark.module';
import { InsightPageModule } from './../insight/insight.module';
import { MotivationPageModule } from './../motivation/motivation.module';
import { LovePageModule } from './../love/love.module';
import { PrayersPageModule } from './../prayers/prayers.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { HomePage } from '../home/home.page';
import { SchedulePage } from '../schedule/schedule';
import { HomePageModule } from '../home/home.module';
import { DataResolverService } from 'src/providers/resolverData';
// import { PostsPage } from "../../pages/posts/posts.page";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomePage
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomePage
          }
          // {
          //   path: "single-post/:postId",
          //   loadChildren:() => import('../single-post/single-post.module').then(m => m.SinglePostPageModule)
          // }
        ]
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage
          },
          {
            path: 'session/:sessionId',
            loadChildren:
              '../session-detail/session-detail.module#SessionDetailModule'
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren:
              '../speaker-list/speaker-list.module#SpeakerListModule'
          },
          {
            path: 'session/:sessionId',
            loadChildren:
              '../session-detail/session-detail.module#SessionDetailModule'
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren:
              '../speaker-detail/speaker-detail.module#SpeakerDetailModule'
          }
        ]
      },
      {
        path: 'notes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notes/notes.module').then(m => m.NotesPageModule)
          },
          {
            path: 'note-details/:noteid',
            loadChildren: () =>
              import('../note-details/note-details.module').then(m =>m.NoteDetailsPageModule)
          },
          {
           path:'create-note',
           loadChildren:()=>import('../create-note/create-note.module').then((m)=>m.CreateNotePageModule )
          }
        ]
      },
      {
        path: 'dashboards',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboards/dashboards.module').then(
                m => m.DashboardsPageModule
              )
          },
          {
            path: 'daily-nudget',
            loadChildren: () =>
              import('../daily-nudget/daily-nudget.module').then(
                m => m.DailyNudgetPageModule
              )
          },
          {
            path: 'prayers',
            loadChildren: () =>
              import('../prayers/prayers.module').then(m => m.PrayersPageModule)
          },
          {
            path: 'word-clips',
            loadChildren: () =>
              import('../word-clips/word-clips.module').then(
                m => m.WordClipsPageModule
              )
          },
          {
            path: 'push-network',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../push-network/push-network.module').then(
                    m => m.PushNetworkPageModule
                  )
              },
              {
                path: 'prayer',
                loadChildren: () =>
                  import('../prayer-details/prayer-details.module').then(
                    m => m.PrayerDetailsPageModule
                  )
              }
            ]
          },
          {
            path: 'insight',
            loadChildren: () =>
              import('../insight/insight.module').then(m => m.InsightPageModule)
          },
          {
            path: 'requests',
            loadChildren: () =>
              import('../requests/requests.module').then(
                m => m.RequestsPageModule
              )
          },
          {
            path: 'chatroom-list',
            children:[
              {
                path:'',
                loadChildren: () =>
                  import('../chatrom-list/chatrom-list.module').then(
                    m => m.ChatromListPageModule
                  )
              },
              {
                path:'chatroom/:key',
                resolve:{
                  roomKey: DataResolverService
                },

                loadChildren: () =>
                  import('../chatrom/chatrom.module').then(
                    m => m.ChatromPageModule
                  )
              }
            ]
          },
          {
            path: 'create-chatroom',
            loadChildren: () =>
              import('../create-chatroom/create-chatroom.module').then(
                m => m.CreateChatroomPageModule
              )
          },
          {
            path: 'daily-verse',
            loadChildren: () =>
              import('../daily-verse/daily-verse.module').then(
                m => m.DailyVersePageModule
              )
          }
        ]
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      },
      {
        path: 'bookmark',
        children: [
          {
            path: '',
            loadChildren: '../bookmark/bookmark.module#BookmarkPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'inspire-impact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inspire-impact/inspire-impact.module').then(
                m => m.InspireImpactPageModule
              )
          },
          {
            path: 'podcast-details',
            loadChildren: () =>
              import('../podcast-details/podcast-details.module').then(
                m => m.PodcastDetailsPageModule
              )
          }
        ]
      },
      {
        path: 'generals',
        loadChildren: './generals/generals.module#GeneralsPageModule'
      },
      { path: 'plans', loadChildren: './plans/plans.module#PlansPageModule' },

      // { path: "plans", loadChildren: "../plans/plans.module#PlansPageModule" },
      {
        path: 'generals',
        loadChildren: './generals/generals.module#GeneralsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
