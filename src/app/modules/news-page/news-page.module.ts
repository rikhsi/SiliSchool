import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPageRoutingModule } from './news-page-routing.module';
import { NewsPageComponent } from './news-page.component';


@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    NewsPageRoutingModule
  ]
})
export class NewsPageModule { }
