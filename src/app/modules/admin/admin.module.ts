import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FaqComponent } from './components/faq/faq.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    FaqComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    TranslateModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzCollapseModule,
    NzTypographyModule,
    NzInputModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
