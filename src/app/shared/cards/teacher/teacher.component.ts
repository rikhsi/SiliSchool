import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teachers';


@Component({
  selector: 'sili-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less']
})
export class TeacherComponent implements OnInit {
  @Input() teacher!: Teacher;
  fallback:string = '../../../../assets/img/fallback.png';

  constructor() { }

  ngOnInit(): void {
  }

}
