import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { BreadCrump } from 'src/app/models/breadCrump';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'sili-news-card-page',
  templateUrl: './news-card-page.component.html',
  styleUrls: ['./news-card-page.component.less']
})
export class NewsCardPageComponent implements OnInit {
  title: string = 'news.more-news';
  fallback:string = '../../../../../assets/img/fallback.png';
  routeId!: number;
  isLoading: boolean = true;
  advert!: Advert;
  news!: Advert[];
  breadCrump: BreadCrump[] = [
    {
      title: 'home.title',
      path: ''
    },
    {
      title: 'news.title',
      path: '/news'
    },
    {
      title: 'Текущая страница',
      path: '/news'
    }
  ];

  constructor(private newsService: NewsService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => this.routeId = +params['id']);
    setTimeout(() => {
      this.advert = this.newsService.adverts[this.routeId-1];
      this.news = this.newsService.adverts.filter(data => data.id !== this.advert.id ).slice(0,3);
      this.isLoading = false;
    }, 2000);
  }
}
