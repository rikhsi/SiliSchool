import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageComponent } from './gallery-page.component';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    GalleryPageRoutingModule,
    PageContainerModule,
    NzGridModule,
    NzPaginationModule,
    SkeletonModule,
    NzImageModule
  ]
})
export class GalleryPageModule { }
