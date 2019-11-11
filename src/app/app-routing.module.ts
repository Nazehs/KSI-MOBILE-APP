import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'mainlogin',
    loadChildren: () => import('./mainlogin/mainlogin.module').then(m => m.MainloginPageModule)
  },
  {
    path: 'mainsignup',
    loadChildren: () => import('./mainsignup/mainsignup.module').then(m => m.MainsignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: "single-post/:postId",
    loadChildren: () => import('./single-post/single-post.module').then(m => m.SinglePostPageModule)
  },
  {
    path: '',
    redirectTo: '/onboarding',
    pathMatch: 'full'
  },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule' },  { path: 'inspire-impact', loadChildren: './inspire-impact/inspire-impact.module#InspireImpactPageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'daily-verse', loadChildren: './daily-verse/daily-verse.module#DailyVersePageModule' },
  { path: 'daily-nudget', loadChildren: './daily-nudget/daily-nudget.module#DailyNudgetPageModule' },
  { path: 'daily-words', loadChildren: './daily-words/daily-words.module#DailyWordsPageModule' },
  { path: 'word-clips', loadChildren: './word-clips/word-clips.module#WordClipsPageModule' },
  { path: 'push-network', loadChildren: './push-network/push-network.module#PushNetworkPageModule' },
  { path: 'podcast-details', loadChildren: './podcast-details/podcast-details.module#PodcastDetailsPageModule' },
  { path: 'chatrom-list', loadChildren: './chatrom-list/chatrom-list.module#ChatromListPageModule' },
  { path: 'chatrom', loadChildren: './chatrom/chatrom.module#ChatromPageModule' },
  { path: 'create-chatroom', loadChildren: './create-chatroom/create-chatroom.module#CreateChatroomPageModule' },
  { path: 'prayer-details', loadChildren: './prayer-details/prayer-details.module#PrayerDetailsPageModule' },
  { path: 'note-details', loadChildren: './note-details/note-details.module#NoteDetailsPageModule' },
  { path: 'create-note', loadChildren: './create-note/create-note.module#CreateNotePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
