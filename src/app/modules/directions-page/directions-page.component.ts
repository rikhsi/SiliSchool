import { Component, OnInit } from '@angular/core';
import { BreadCrump } from 'src/app/models/breadCrump';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-directions-page',
  templateUrl: './directions-page.component.html',
  styleUrls: ['./directions-page.component.less']
})
export class DirectionsPageComponent implements OnInit {
  title: string = 'directions.title'
  isLoading: boolean = true;
  isEmpty: boolean = false;
  directions: Direction[] = []
  breadCrump: BreadCrump[] = [
    {
      title: 'home.title',
      path: ''
    },
    {
      title: 'directions.title',
      path: '/directions'
    }
  ];

  constructor(private directionsService: DirectionsService,private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.getData(data);
      }
    })
  }

  getData(lang:string):void{
    this.isLoading = true;
    this.directionsService.get(lang).subscribe({
      next: data => {
        if(data.length === 0){
          this.isEmpty = true;
        }else{
          this.directions = data.filter(data => data.teachers.length !=0);
          if(this.directions.length === 0){
            this.isEmpty = true;
          } else{
            this.isEmpty = false;
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.isEmpty = true;
        this.isLoading = false;
      }
    })
  }
}
