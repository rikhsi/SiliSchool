import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sili-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() isShow: boolean = true;
  @Output() swipePrev = new EventEmitter();
  @Output() swipeNext = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
