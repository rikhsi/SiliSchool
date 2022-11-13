import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routingModule
import { TimeTablePageRoutingModule } from './time-table-page-routing.module';

//components
import { TimeTablePageComponent } from './time-table-page.component';

//sharedModules
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import { BreadCrumpModule } from 'src/app/shared/bread-crump/bread-crump.module';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

//translateModule
import { TranslateModule } from '@ngx-translate/core';
import { EmptyModule } from 'src/app/shared/empty/empty.module';

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
    SkeletonModule,
    BreadCrumpModule,
    EmptyModule
  ]
})
export class TimeTablePageModule { }
