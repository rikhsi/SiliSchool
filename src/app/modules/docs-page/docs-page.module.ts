import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsPageRoutingModule } from './docs-page-routing.module';
import { DocsPageComponent } from './docs-page.component';

//sharedModules
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

//translateModule
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    DocsPageComponent
  ],
  imports: [
    CommonModule,
    DocsPageRoutingModule,
    PageContainerModule,
    SkeletonModule,
    NzGridModule,
    NzButtonModule,
    TranslateModule,
  ]
})
export class DocsPageModule { }
