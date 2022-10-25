import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TitleDirective } from 'src/app/shared/title/title.directive';

@NgModule({
  declarations: [
    TitleComponent,
    TitleDirective
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
  ],
  exports: [
    TitleComponent
  ]
})
export class TitleModule { }
