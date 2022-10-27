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
import { HomeModule } from './modules/home/home.module';

//formsModule
import { FormsModule } from '@angular/forms';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';

//translateModule and service
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './services/translate';

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
    HomeModule,
    NzGridModule,
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
