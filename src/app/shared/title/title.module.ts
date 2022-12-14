import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    TranslateModule
  ],
  exports: [
    TitleComponent
  ]
})
export class TitleModule { }
