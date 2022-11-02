import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionsPageRoutingModule } from './directions-page-routing.module';
import { DirectionsPageComponent } from './directions-page.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';


@NgModule({
  declarations: [
    DirectionsPageComponent
  ],
  imports: [
    CommonModule,
    DirectionsPageRoutingModule,
    NzGridModule,
    SkeletonModule,
    PageContainerModule,
    CardsModule
  ]
})
export class DirectionsPageModule { }
