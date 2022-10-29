import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//animationModules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//modules
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './modules/home-page/home-page.module';

//ngxMaskModule
import { NgxMaskModule } from 'ngx-mask';

//formsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';

//translateModule and service
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './services/translate';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomePageModule,
    NzGridModule,
    NzFormModule,
    NzIconModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
