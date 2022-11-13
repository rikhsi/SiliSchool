import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionsCardPageRoutingModule } from './directions-card-page-routing.module';
import { DirectionsCardPageComponent } from './directions-card-page.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { BreadCrumpModule } from 'src/app/shared/bread-crump/bread-crump.module';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { NzImageModule } from 'ng-zorro-antd/image';
import { EmptyModule } from 'src/app/shared/empty/empty.module';

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
    TitleModule,
    BreadCrumpModule,
    PageContainerModule,
    NzImageModule,
    EmptyModule
  ]
})
export class DirectionsCardPageModule { }
