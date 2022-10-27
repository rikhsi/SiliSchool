import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { AdvertComponent } from './advert/advert.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';



@NgModule({
  declarations: [
    TeacherComponent,
    AdvertComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzImageModule,
    NzTypographyModule
  ],
  exports: [
    TeacherComponent,
    AdvertComponent
  ]
})
export class CardsModule { }
