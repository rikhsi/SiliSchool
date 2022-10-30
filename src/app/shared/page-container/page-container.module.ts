import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container.component';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    NzGridModule
  ],
  exports: [
    PageContainerComponent
  ]
})
export class PageContainerModule { }
