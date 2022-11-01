import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule
  ],
  exports: [
    PageContainerComponent
  ]
})
export class PageContainerModule { }
