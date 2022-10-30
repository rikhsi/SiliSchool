import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'sili-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.less']
})
export class NewsPageComponent implements OnInit {
  isLoading = true;
  news!: Advert[];

  constructor(private newsService: NewsService) {}

  getData():void{
    this.news = this.newsService.adverts;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getData();
      this.isLoading = !this.isLoading
    }, 2000);
  }
}
