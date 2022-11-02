import { Component, OnInit } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { Teacher } from 'src/app/models/teachers';
import { DirectionsService } from 'src/app/services/directions.service';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'sili-directions-card-page',
  templateUrl: './directions-card-page.component.html',
  styleUrls: ['./directions-card-page.component.less']
})
export class DirectionsCardPageComponent implements OnInit {
  direction!: Direction;
  teachers!: Teacher[];
  isLoading: boolean = true;
  constructor(private directionsService: DirectionsService, private teachersService: TeachersService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.direction = this.directionsService.directions[2];
      this.teachers = this.teachersService.teachers;
      this.isLoading = false;
    }, 2000);
  }
}
