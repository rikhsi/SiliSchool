import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-gallery-skeleton',
  templateUrl: './gallery-skeleton.component.html',
  styleUrls: ['./gallery-skeleton.component.less']
})
export class GallerySkeletonComponent implements OnInit {
  @Input() counter!: number;
  @Input() span!: number;
  @Input() isMain: boolean = false;
  skeleton: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.skeleton = this.skeleton.concat(...Array(this.counter))
  }
}
