import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HomePageComponent } from './home-page.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DirectionsComponent } from './directions/directions.component';
import { FaqComponent } from './faq/faq.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AdministrationComponent } from './administration/administration.component';

//swiperModule
import { SwiperModule } from 'swiper/angular';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

//shared
import { TitleModule } from 'src/app/shared/title/title.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { MoreModule } from 'src/app/shared/more/more.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';


//translateModule
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EmptyModule } from 'src/app/shared/empty/empty.module';

@NgModule({
  declarations: [
    HomePageComponent,
    MainComponent,
    NewsComponent,
    GalleryComponent,
    AchievementsComponent,
    AdministrationComponent,
    DirectionsComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    SwiperModule,
    NzGridModule,
    NzButtonModule,
    NzImageModule,
    NzCollapseModule,
    TitleModule,
    SkeletonModule,
    MoreModule,
    TranslateModule,
    NzTypographyModule,
    CardsModule,
    NzIconModule,
    EmptyModule
  ]
})
export class HomePageModule { }
