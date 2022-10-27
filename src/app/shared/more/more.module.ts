import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './more.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    MoreComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzGridModule,
    TranslateModule
  ],
  exports: [
    MoreComponent
  ]
})
export class MoreModule { }
