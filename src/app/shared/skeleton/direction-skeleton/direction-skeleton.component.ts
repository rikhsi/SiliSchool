import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-direction-skeleton',
  templateUrl: './direction-skeleton.component.html',
  styleUrls: ['./direction-skeleton.component.less']
})
export class DirectionSkeletonComponent implements OnInit {
  @Input() counter!: number;
  @Input() span: number = 8;
  @Input() height!: boolean;

  constructor() { }

  ngOnInit(): void {}
}
