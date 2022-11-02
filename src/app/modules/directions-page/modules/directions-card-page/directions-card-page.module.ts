import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionsCardPageRoutingModule } from './directions-card-page-routing.module';
import { DirectionsCardPageComponent } from './directions-card-page.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { TitleModule } from 'src/app/shared/title/title.module';


@NgModule({
  declarations: [
    DirectionsCardPageComponent
  ],
  imports: [
    CommonModule,
    DirectionsCardPageRoutingModule,
    NzGridModule,
    CardsModule,
    SkeletonModule,
    TitleModule
  ]
})
export class DirectionsCardPageModule { }
