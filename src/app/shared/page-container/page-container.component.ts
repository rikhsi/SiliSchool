import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.less']
})
export class PageContainerComponent implements OnInit {
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
