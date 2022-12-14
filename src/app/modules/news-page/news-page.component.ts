import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { BreadCrump } from 'src/app/models/breadCrump';
import { MainService } from 'src/app/services/main.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'sili-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.less']
})
export class NewsPageComponent implements OnInit {
  page:number = 0;
  lang!:string;
  isEmpty: boolean = false;
  button: boolean = true;
  title: string = 'news.pageTitle'
  isLoading = true;
  news: Advert[] = [];
  paginatedList: Advert[] = [];
  breadCrump: BreadCrump[] = [
    {
      title: 'home.title',
      path: ''
    },
    {
      title: 'news.title',
      path: '/news'
    }
  ];

  constructor(private newsService: NewsService,private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.lang = data;
        this.getData();
      }
    })
  }

  getData():void{
    this.isLoading = true;
    this.newsService.get(this.page,this.lang).subscribe({
      next: data => {
        if(data.data.length === 0){
          this.isEmpty = true;
        } else{
          if(data.pages > this.page){
            this.paginatedList = this.paginatedList.concat(data.data);
            this.news = [...this.paginatedList];
          } else{
            this.paginatedList = this.paginatedList.concat(data.data);
            this.news = [...this.paginatedList];
            this.button = false;
          }
          this.page = this.page + 1;
          this.isEmpty = false;
          this.isLoading = false;
        }
      },
      error: () => {
        this.isEmpty = true;
        this.isLoading = false;
      }
    })
  }
}
