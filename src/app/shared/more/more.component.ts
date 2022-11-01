import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sili-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.less']
})
export class MoreComponent implements OnInit {

  @Output() loadMore = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

}
