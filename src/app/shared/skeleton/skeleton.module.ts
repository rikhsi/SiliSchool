import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';


@NgModule({
  declarations: [
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzSkeletonModule
  ],
  exports: [
    SkeletonComponent,
  ]
})
export class SkeletonModule { }
