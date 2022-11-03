import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BreadCrump } from 'src/app/models/breadCrump';
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
  title: string = 'directions.teachers';
  routeId!: number;
  isLoading: boolean = true;
  direction!: Direction;
  teachers!: Teacher[];
  breadCrump: BreadCrump[] = [
    {
      title: 'home.title',
      path: ''
    },
    {
      title: 'directions.title',
      path: 'directions'
    }
  ];

  constructor(private directionsService: DirectionsService, private teachersService: TeachersService,private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => this.routeId = +params['id']);
    setTimeout(() => {
      this.direction = this.directionsService.directions[this.routeId-1];
      this.breadCrump.push({title: `${this.direction.title}`, path: `directions/${this.direction.id}`})
      this.teachers = this.teachersService.teachers;
      this.isLoading = false;
    }, 2000);
  }
}
