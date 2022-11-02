import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsPageRoutingModule } from './docs-page-routing.module';
import { DocsPageComponent } from './docs-page.component';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';


@NgModule({
  declarations: [
    DocsPageComponent
  ],
  imports: [
    CommonModule,
    DocsPageRoutingModule,
    PageContainerModule,
    NzGridModule,
    NzButtonModule,
    TranslateModule,
    SkeletonModule
  ]
})
export class DocsPageModule { }
