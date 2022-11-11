import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teachers';
import { api } from 'src/app/services/main.service';


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

  open(id:number){
    window.open(api + `/getTeacherTimetable/${id}`, '_blank')
  }

}
