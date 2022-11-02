import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionPageRoutingModule } from './connection-page-routing.module';
import { ConnectionPageComponent } from './connection-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    ConnectionPageComponent
  ],
  imports: [
    CommonModule,
    ConnectionPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzInputModule,
    NzFormModule,
    TranslateModule,
    NzButtonModule,
    NgxMaskModule
  ]
})
export class ConnectionPageModule { }
