import { Component, Input, OnInit } from '@angular/core';
import { Adminstration } from 'src/app/models/adminstration';


@Component({
  selector: 'sili-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less']
})
export class TeacherComponent implements OnInit {
  @Input() teacher!: Adminstration;
  fallback:string = '../../../../assets/img/fallback.png';

  constructor() { }

  ngOnInit(): void {
  }

}
