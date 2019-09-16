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
    path: "single-post/:postId",
    loadChildren:() => import('./single-post/single-post.module').then(m => m.SinglePostPageModule)
  },
  {
    path: '',
    redirectTo: '/onboarding',
    pathMatch: 'full'
  },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
