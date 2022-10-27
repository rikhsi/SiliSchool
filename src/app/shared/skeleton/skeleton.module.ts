import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NewsSkeletonComponent } from './news-skeleton/news-skeleton.component';
import { AdminstrationSkeletonComponent } from './adminstration-skeleton/adminstration-skeleton.component';
import { AchievementSkeletonComponent } from './achievement-skeleton/achievement-skeleton.component';


@NgModule({
  declarations: [
    NewsSkeletonComponent,
    AdminstrationSkeletonComponent,
    AchievementSkeletonComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzSkeletonModule
  ],
  exports: [
    NewsSkeletonComponent,
    AchievementSkeletonComponent,
    AdminstrationSkeletonComponent
  ]
})
export class SkeletonModule { }
