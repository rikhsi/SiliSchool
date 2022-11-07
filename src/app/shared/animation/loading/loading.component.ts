import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sili-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {

  list: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.list = this.list.concat(...Array(2));
  }
}
