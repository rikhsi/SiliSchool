import { Component, OnInit } from '@angular/core';
import { BreadCrump } from 'src/app/models/breadCrump';
import { Docs } from 'src/app/models/docs';
import { DocsService } from 'src/app/services/docs.service';

@Component({
  selector: 'sili-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.less']
})
export class DocsPageComponent implements OnInit {
  title: string = 'faq.info';
  isLoading: boolean = true;
  docs!: Docs[];
  breadCrump: BreadCrump[] = [
    {
      title: 'home.title',
      path: ''
    },
    {
      title: 'faq.info',
      path: '/docs'
    }
  ];
  constructor(private docsService: DocsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
