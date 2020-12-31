
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { HomePage } from '../home/home.page';
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
            path: 'word-clips',
            loadChildren: () =>
              import('../word-clips/word-clips.module').then(
                m => m.WordClipsPageModule
              )
          },
          {
            path:'accounts',
            loadChildren:()=>import('../accounts/accounts.module').then(m => m.AccountsPageModule)
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
                path: 'prayer-details',
                loadChildren: () =>
                  import('../prayer-details/prayer-details.module').then(
                    m => m.PrayerDetailsPageModule
                  )
              },
               {
                path: 'edit-prayer',
                loadChildren: () =>
                  import('../edit-prayer/edit-prayer.module').then(
                    m => m.EditPrayerPageModule
                  )
              },
             
            ]
          },
          {
            path: 'insight',
            loadChildren: () =>
              import('../insight/insight.module').then(m => m.InsightPageModule)
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
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
