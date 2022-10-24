import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';

//swiperModule
import { SwiperModule } from 'swiper/angular';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NzGridModule
  ]
})
export class HomeModule { }
