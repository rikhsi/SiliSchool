import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  selector: string = ".sili__wrapper";
  isLoading: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.changeStatus();
  }

  onScroll() {
    switch(this.router.url){
      case '/news': {
        console.log('news')
        break
      }
      case '/home': {
        console.log('home')
        break
      }
    }
  }

  changeStatus():void{
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 1000);
  }
}
