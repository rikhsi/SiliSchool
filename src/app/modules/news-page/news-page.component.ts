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
  page:number = 1;
  lang!:string;
  button: boolean = true;
  title: string = 'news.pageTitle'
  isLoading = true;
  news!: Advert[];
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
        this.getData(0,data);
      }
    })
  }

  getData(page:number,lang:string):void{
    this.isLoading = true;
    this.newsService.get(0,lang).subscribe({
      next: data => {
        this.news = data;
        this.paginatedList = data;
        this.isLoading = false;
      }
    })
  }

  loadMore():void{
    this.page = this.page + 1;
    this.isLoading = true;
    this.newsService.get(this.page,this.lang).subscribe({
      next: data => {
        if(data.length === 0){
          this.button = false;
          this.isLoading = false;
        } else{
          this.paginatedList = this.paginatedList.concat(data);
          this.news = [...this.paginatedList];
          this.isLoading = false;
        }
      }
    })
  }
}
