import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  isLoading: boolean = false;

  constructor(){}

  ngOnInit(): void {
    this.changeStatus();
  }

  changeStatus():void{
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 1000);
  }
}
