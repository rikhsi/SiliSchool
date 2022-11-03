import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumpComponent } from './bread-crump.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    BreadCrumpComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule
  ],
  exports: [
    BreadCrumpComponent
  ]
})
export class BreadCrumpModule { }
