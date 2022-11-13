import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzEmptyModule } from 'ng-zorro-antd/empty';



@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzEmptyModule
  ],
  exports: [
    EmptyComponent
  ]
})
export class EmptyModule { }
