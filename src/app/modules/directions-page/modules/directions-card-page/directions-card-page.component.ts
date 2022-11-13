import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BreadCrump } from 'src/app/models/breadCrump';
import { Direction } from 'src/app/models/direction';
import { Teacher } from 'src/app/models/teachers';
import { DirectionsService } from 'src/app/services/directions.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-directions-card-page',
  templateUrl: './directions-card-page.component.html',
  styleUrls: ['./directions-card-page.component.less']
})
export class DirectionsCardPageComponent implements OnInit {
  fallback:string = '../../../../../assets/img/fallback.png';
  title: string = 'directions.teachers';
  lang!:string;
  routeId!: number;
  isLoading: boolean = true;
  direction!: Direction;
  teachers: Teacher[] = []
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

  constructor(private directionsService: DirectionsService, private activedRoute: ActivatedRoute,private mainService:MainService,private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => this.routeId = +params['id']);
    this.mainService.message.subscribe({
      next: data => {
        this.lang = data;
        this.get();
      }
    })
  }

  get():void{
    this.isLoading = true;
    this.directionsService.getID(this.routeId,this.lang).subscribe({
      next: data => {
        if(data.teachers.length === 0){
          this.router.navigate([''])
        } else{
          this.direction = data;
          this.teachers = data.teachers;
          this.breadCrump.push({title: `${data.name}`, path: `directions/${data.id}`});
          this.isLoading = false;
        }
      },error: () => {
        this.router.navigate([''])
      }
    })
  }
}
