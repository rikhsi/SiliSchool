import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sili-docs-skeleton',
  templateUrl: './docs-skeleton.component.html',
  styleUrls: ['./docs-skeleton.component.less']
})
export class DocsSkeletonComponent implements OnInit {

  @Input() counter!: number;
  skeleton: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.skeleton = this.skeleton.concat(...Array(this.counter))
  }
}
