import { Component, OnInit } from '@angular/core';
import { BreadCrump } from 'src/app/models/breadCrump';
import { Teacher } from 'src/app/models/teachers';
import { api, MainService } from 'src/app/services/main.service';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'sili-time-table-page',
  templateUrl: './time-table-page.component.html',
  styleUrls: ['./time-table-page.component.less']
})
export class TimeTablePageComponent implements OnInit {
  api = api;
  title: string = 'time-table.title';
  isLoading: boolean = true;
  isEmpty: boolean = false;
  teachers: Teacher[] = [];
  breadCrump: BreadCrump[] = [
    {
      title: 'home.title',
      path: ''
    },
    {
      title: 'time-table.title',
      path: '/time-table'
    }
  ];
  constructor(private teachersService: TeachersService,private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.getData(data);
      }
    })
  }

  getData(lang:string):void{
    this.isLoading = true;
    this.teachersService.get(lang).subscribe({
      next: data => {
        if(data.length === 0){
          this.isEmpty = true;
        } else{
          this.teachers = data;
          this.isEmpty = false;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isEmpty = true;
        this.isLoading = false;
      }
    })
  }

  open(id:number){
    window.open(api + `/getTeacherTimetable/${id}`, '_blank')
  }  
}
