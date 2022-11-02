import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTablePageRoutingModule } from './time-table-page-routing.module';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { TimeTablePageComponent } from './time-table-page.component';

@NgModule({
  declarations: [
    TimeTablePageComponent
  ],
  imports: [
    CommonModule,
    TimeTablePageRoutingModule,
    PageContainerModule,
    NzGridModule,
    NzButtonModule,
    TranslateModule,
    SkeletonModule
  ]
})
export class TimeTablePageModule { }
