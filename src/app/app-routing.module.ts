import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './modules/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  {
    path: "gallery",
    loadChildren: () => import('./modules/gallery-page/gallery-page.module').then(m => m.GalleryPageModule)
  },
  {
    path: "news",
    loadChildren: () => import('./modules/news-page/news-page.module').then(m => m.NewsPageModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./modules/docs-page/docs-page.module').then(m => m.DocsPageModule)
  },
  {
    path: 'time-table',
    loadChildren: () => import('./modules/time-table-page/time-table-page.module').then(m => m.TimeTablePageModule)
  },
  {
    path: 'directions',
    loadChildren: () => import('./modules/directions-page/directions-page.module').then(m => m.DirectionsPageModule)
  },
  {
    path: 'connection',
    loadChildren: () => import('./modules/connection-page/connection-page.module').then(m => m.ConnectionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
