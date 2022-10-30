import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  schoolNumber!: number;

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.schoolNumber = this.mainService.schoolNumber;
  }

  changePage(id: number):void{
    if(id === 1){
      this.router.navigate(['gallery'])
    } else{
      this.router.navigate(['/news'])
    }
  }
}
