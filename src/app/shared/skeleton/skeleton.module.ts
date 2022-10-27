import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NewsSkeletonComponent } from './news-skeleton/news-skeleton.component';
import { AdminstrationSkeletonComponent } from './adminstration-skeleton/adminstration-skeleton.component';
import { AchievementSkeletonComponent } from './achievement-skeleton/achievement-skeleton.component';
import { GallerySkeletonComponent } from './gallery-skeleton/gallery-skeleton.component';
import { DirectionSkeletonComponent } from './direction-skeleton/direction-skeleton.component';


@NgModule({
  declarations: [
    NewsSkeletonComponent,
    AdminstrationSkeletonComponent,
    AchievementSkeletonComponent,
    GallerySkeletonComponent,
    DirectionSkeletonComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzSkeletonModule
  ],
  exports: [
    NewsSkeletonComponent,
    AchievementSkeletonComponent,
    AdminstrationSkeletonComponent,
    GallerySkeletonComponent,
    DirectionSkeletonComponent
  ]
})
export class SkeletonModule { }
