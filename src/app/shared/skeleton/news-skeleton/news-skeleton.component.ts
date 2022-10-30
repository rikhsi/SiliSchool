import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-news-skeleton',
  templateUrl: './news-skeleton.component.html',
  styleUrls: ['./news-skeleton.component.less']
})
export class NewsSkeletonComponent implements OnInit {
  @Input() counter!: number;
  skeleton: any[] = []
  
  constructor() { }

  ngOnInit(): void {
    this.skeleton = this.skeleton.concat(...Array(this.counter))
  }

}
