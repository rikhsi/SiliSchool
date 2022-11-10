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
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NewsComponent } from './components/news/news.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AdminstrationComponent } from './components/adminstration/adminstration.component';
import { InfoComponent } from './components/info/info.component';
import { DirectionsComponent } from './components/directions/directions.component';
@NgModule({
  declarations: [
    AdminComponent,
    FaqComponent,
    GalleryComponent,
    NewsComponent,
    TeachersComponent,
    AchievementsComponent,
    AdminstrationComponent,
    InfoComponent,
    DirectionsComponent
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
    ReactiveFormsModule,
    NzImageModule,
    NzUploadModule,
    NzModalModule,
    NzSelectModule
  ]
})
export class AdminModule { }
