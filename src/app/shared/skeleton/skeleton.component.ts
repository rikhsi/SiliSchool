import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.less']
})
export class SkeletonComponent implements OnInit {

  @Input() isImageSkeleton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
