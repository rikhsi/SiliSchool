import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  {
    path: "gallery",
    loadChildren: () => import('./modules/gallery-page/gallery-page.module').then(m => m.GalleryPageModule)
  },
  {
    path: "news",
    loadChildren: () => import('./modules/news-page/news-page.module').then(m => m.NewsPageModule)
  },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
