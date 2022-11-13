import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageComponent } from './gallery-page.component';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { NzImageModule } from 'ng-zorro-antd/image';
import { MoreModule } from 'src/app/shared/more/more.module';
import { BreadCrumpModule } from 'src/app/shared/bread-crump/bread-crump.module';
import { EmptyModule } from 'src/app/shared/empty/empty.module';

@NgModule({
  declarations: [
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    GalleryPageRoutingModule,
    PageContainerModule,
    NzGridModule,
    SkeletonModule,
    NzImageModule,
    MoreModule,
    BreadCrumpModule,
    EmptyModule
  ]
})
export class GalleryPageModule { }
