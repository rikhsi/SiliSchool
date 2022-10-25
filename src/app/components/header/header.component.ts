import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  schoolNumber!: number;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.schoolNumber = this.mainService.schoolNumber;
  }

}
