import { Component, OnInit } from '@angular/core';
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

  constructor(private docsService: DocsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.docs = this.docsService.docs;
      this.isLoading = false;
    }, 2000);
    
  }

}
