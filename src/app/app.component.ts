import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  isDefaultPage: boolean = true;
  constructor(private router: Router,private mainService: MainService,private meta: Title,public translate: TranslateService){}

  ngOnInit(): void {
    this.mainService.isDefaultPage.subscribe(data => {
      this.isDefaultPage = data;
    })
    this.mainService.setPage(true)
    this.router.events.subscribe((event:any) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      this.animate();
      window.scrollTo(0, 0)
    });
    this.animate();
    this.getTranslate();
  }

  getTranslate():void {
    this.translate.get('header.title').subscribe(data => {
      this.meta.setTitle(data)
    })
  }

  animate():void{
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }  
}
