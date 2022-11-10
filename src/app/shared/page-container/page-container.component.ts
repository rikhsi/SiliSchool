import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.less']
})
export class PageContainerComponent implements OnInit {
  @Input() title!: string;
  @Input() photos = {
    model_1: false,
    model_2: false,
    model_3: false,
    model_4: false,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
