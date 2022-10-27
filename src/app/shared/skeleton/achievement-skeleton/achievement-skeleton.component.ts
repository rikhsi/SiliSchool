import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-achievement-skeleton',
  templateUrl: './achievement-skeleton.component.html',
  styleUrls: ['./achievement-skeleton.component.less']
})
export class AchievementSkeletonComponent implements OnInit {
  @Input() counter!: number;
  skeleton: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.skeleton = this.skeleton.concat([...Array(this.counter)]);
  }

}
