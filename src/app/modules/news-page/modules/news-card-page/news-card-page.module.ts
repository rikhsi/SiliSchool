import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCardPageRoutingModule } from './news-card-page-routing.module';
import { NewsCardPageComponent } from './news-card-page.component';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { BreadCrumpModule } from 'src/app/shared/bread-crump/bread-crump.module';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';


@NgModule({
  declarations: [
    NewsCardPageComponent
  ],
  imports: [
    CommonModule,
    NewsCardPageRoutingModule,
    CardsModule,
    NzGridModule,
    SkeletonModule,
    TitleModule,
    BreadCrumpModule,
    NzImageModule,
    NzSkeletonModule
  ]
})
export class NewsCardPageModule { }
