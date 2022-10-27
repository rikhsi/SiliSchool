import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';

//swiperModule
import { SwiperModule } from 'swiper/angular';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

//shared
import { TitleModule } from 'src/app/shared/title/title.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { MoreModule } from 'src/app/shared/more/more.module';

//translateModule
import { TranslateModule } from '@ngx-translate/core';
import { AchievementsComponent } from './achievements/achievements.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    NewsComponent,
    GalleryComponent,
    AchievementsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NzGridModule,
    NzButtonModule,
    NzImageModule,
    TitleModule,
    SkeletonModule,
    MoreModule,
    TranslateModule,
    NzTypographyModule
  ]
})
export class HomeModule { }
