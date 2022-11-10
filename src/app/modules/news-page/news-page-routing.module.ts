import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsResolver } from 'src/app/services/news.resolver';
import { NewsPageComponent } from './news-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent
  },
  {
    path: ':id',
    resolve: { data: NewsResolver },
    loadChildren: () => import('./modules/news-card-page/news-card-page.module').then(m => m.NewsCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPageRoutingModule { }
