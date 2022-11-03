import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardPageComponent } from './news-card-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewsCardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCardPageRoutingModule { }
