import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';


@Component({
  selector: 'sili-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less']
})
export class TeacherComponent implements OnInit {

  fallback:string = '../../../../assets/img/fallback.png';

  @Input() teacher!: Teacher;

  constructor() { }

  ngOnInit(): void {
  }

}
