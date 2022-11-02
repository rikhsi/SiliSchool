import { Component, OnInit } from '@angular/core';
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

  constructor(private teachersService: TeachersService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.teachers = this.teachersService.teachers;
      this.isLoading = false;
    }, 2000);
  }
}
