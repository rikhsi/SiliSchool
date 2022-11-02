import { Component, OnInit } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';

@Component({
  selector: 'sili-directions-page',
  templateUrl: './directions-page.component.html',
  styleUrls: ['./directions-page.component.less']
})
export class DirectionsPageComponent implements OnInit {
  title: string = 'directions.title'
  isLoading: boolean = true;
  directions!: Direction[];
 
  constructor(private DirectionsService: DirectionsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.directions = this.DirectionsService.directions;
      this,this.isLoading = false;
    }, 2000);
  }
}
