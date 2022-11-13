import { Component, OnInit } from '@angular/core';
import { BreadCrump } from 'src/app/models/breadCrump';
import { Docs } from 'src/app/models/docs';
import { DocsService } from 'src/app/services/docs.service';
import { api, MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.less']
})
export class DocsPageComponent implements OnInit {
  api = api;
  title: string = 'faq.info';
  isLoading: boolean = true;
  isEmpty: boolean = false;
  docs: Docs[] = [];
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
  constructor(private docsService: DocsService,private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.getData(data);
      }
    })
  }
  
  getData(lang:string):void{
    this.isLoading = true;
    this.docsService.get(lang).subscribe({
      next: data => {
        if(data.length === 0){
          this.isEmpty = true;
        } else{
          this.docs = data;
          this.isEmpty = false;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isEmpty = true;
        this.isLoading = false;
      }
    })
  }

  open(id:number){
    window.open(api + `/getDocumentFile/${id}`, '_blank')
  }
}
