import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageComponent } from './gallery-page.component';


@NgModule({
  declarations: [
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    GalleryPageRoutingModule
  ]
})
export class GalleryPageModule { }
