import { Component, Input, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';

@Component({
  selector: 'sili-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.less']
})
export class AdvertComponent implements OnInit {
  fallback:string = '../../../../assets/img/fallback.png';
  @Input() advert!: Advert;

  constructor() { }

  ngOnInit(): void {
  }

}
