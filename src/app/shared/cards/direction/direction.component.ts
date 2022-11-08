import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direction } from 'src/app/models/direction';

@Component({
  selector: 'sili-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.less']
})
export class DirectionComponent implements OnInit {
  @Input() direction!: Direction;
  @Input() height!: boolean;
  @Input() isMain: boolean = false;
  fallback:string = '../../../../assets/img/fallback.png';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(): void{
    this.router.navigate([`directions/${this.direction.id}`])
  }
}
