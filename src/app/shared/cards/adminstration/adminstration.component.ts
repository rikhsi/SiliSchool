import { Component, Input, OnInit } from '@angular/core';
import { Adminstration } from 'src/app/models/adminstration';

@Component({
  selector: 'sili-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.less']
})
export class AdminstrationComponent implements OnInit {
  @Input() administration!: Adminstration;
  fallback:string = '../../../../assets/img/fallback.png';

  constructor() { }

  ngOnInit(): void {
  }

}
