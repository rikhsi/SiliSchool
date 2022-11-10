import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TranslateModule } from '@ngx-translate/core';
import { NzImageModule } from 'ng-zorro-antd/image';



@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule,
    NzImageModule
  ],
  exports: [
    PageContainerComponent
  ]
})
export class PageContainerModule { }
