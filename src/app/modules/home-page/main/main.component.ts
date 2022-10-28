import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  schoolNumber!: number;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.schoolNumber = this.mainService.schoolNumber;
  }
}
