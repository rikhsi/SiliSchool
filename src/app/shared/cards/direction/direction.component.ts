import { Component, Input, OnInit } from '@angular/core';
import { Direction } from 'src/app/models/direction';

@Component({
  selector: 'sili-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.less']
})
export class DirectionComponent implements OnInit {
  @Input() direction!: Direction;
  fallback:string = '../../../../assets/img/fallback.png';
  
  constructor() { }

  ngOnInit(): void {
  }

}
