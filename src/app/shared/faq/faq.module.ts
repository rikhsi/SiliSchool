import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TitleModule } from '../title/title.module';
import { EmptyModule } from '../empty/empty.module';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    NzCollapseModule,
    NzGridModule,
    TitleModule,
    EmptyModule,
    NzButtonModule,
  ],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }
