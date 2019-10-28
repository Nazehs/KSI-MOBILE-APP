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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
