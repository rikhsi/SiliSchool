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
        this.directions = data.filter(data => data.teachers.length !=0)
        this.isLoading = false;
      }
    })
  }
}
