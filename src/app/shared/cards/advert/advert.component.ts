import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';

@Component({
  selector: 'sili-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.less']
})
export class AdvertComponent implements OnInit {
  @Input() advert!: Advert;
  fallback:string = '../../../../assets/img/fallback.png';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(): void{
    this.router.navigate([`news/${this.advert.id}`])
  }
}
