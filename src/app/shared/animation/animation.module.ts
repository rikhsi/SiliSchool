import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NzGridModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class AnimationModule { }
