import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { AdvertComponent } from './advert/advert.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { DirectionComponent } from './direction/direction.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    TeacherComponent,
    AdvertComponent,
    DirectionComponent,
    AdminstrationComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzImageModule,
    NzTypographyModule,
    NzButtonModule
  ],
  exports: [
    TeacherComponent,
    AdvertComponent,
    DirectionComponent,
    AdminstrationComponent,
  ]
})
export class CardsModule { }
