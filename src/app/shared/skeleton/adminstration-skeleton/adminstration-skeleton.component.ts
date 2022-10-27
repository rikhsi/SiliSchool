import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-adminstration-skeleton',
  templateUrl: './adminstration-skeleton.component.html',
  styleUrls: ['./adminstration-skeleton.component.less']
})
export class AdminstrationSkeletonComponent implements OnInit {
  @Input() counter!: number;
  skeleton: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.skeleton = this.skeleton.concat(...Array(this.counter))
  }

}
