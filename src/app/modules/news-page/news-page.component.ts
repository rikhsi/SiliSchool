import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'sili-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.less']
})
export class NewsPageComponent implements OnInit {
  title: string = 'news.pageTitle'
  isLoading = true;
  news!: Advert[];
  paginatedList: Advert[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getData();
      this.isLoading = !this.isLoading
    }, 2000);
  }

  getData():void{
    this.news = this.newsService.adverts;
    this.paginatedList = this.newsService.adverts;
  }

  loadMore():void{
    this.isLoading = true
    setTimeout(() => {
      this.paginatedList = this.paginatedList.concat(this.newsService.adverts);
      this.news = [...this.paginatedList];
      this.isLoading = false
    }, 2000);
  }
}
