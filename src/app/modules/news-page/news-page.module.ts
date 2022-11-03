import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageRoutingModule } from './news-page-routing.module';
import { NewsPageComponent } from './news-page.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { MoreModule } from 'src/app/shared/more/more.module';
import { BreadCrumpModule } from 'src/app/shared/bread-crump/bread-crump.module';

@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    NewsPageRoutingModule,
    NzGridModule,
    NzListModule,
    CardsModule,
    NzSkeletonModule,
    SkeletonModule,
    PageContainerModule,
    MoreModule,
    BreadCrumpModule
  ]
})
export class NewsPageModule { }

