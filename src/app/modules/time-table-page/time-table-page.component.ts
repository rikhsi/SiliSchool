import { Component, OnInit } from '@angular/core';
import { BreadCrump } from 'src/app/models/breadCrump';
import { Teacher } from 'src/app/models/teachers';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'sili-time-table-page',
  templateUrl: './time-table-page.component.html',
  styleUrls: ['./time-table-page.component.less']
})
export class TimeTablePageComponent implements OnInit {
  title: string = 'time-table.title';
  isLoading: boolean = true;
  teachers!: Teacher[];
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
  constructor(private teachersService: TeachersService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.teachers = this.teachersService.teachers;
      this.isLoading = false;
    }, 2000);
  }
}