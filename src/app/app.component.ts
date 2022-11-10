import { AfterViewInit, Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  isDefaultPage: boolean = true;
  
  constructor(private router: Router,private mainService: MainService){}

  ngOnInit(): void {
    this.mainService.isDefaultPage.subscribe(data => {
      this.isDefaultPage = data;
    })
    this.mainService.setPage(true)
    this.changeStatus();
    this.router.events.subscribe((event:any) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      this.changeStatus();
      window.scrollTo(0, 0)
      this.changeStatus();
    });
  }

  changeStatus():void{
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }  
}
