import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { BreadCrump } from 'src/app/models/breadCrump';
import { MainService } from 'src/app/services/main.service';
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
  lang!:string;
  isLoading: boolean = true;
  advert!: Advert;
  news: Advert[] = [];
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
      title: 'news.title__2',
      path: '/news'
    }
  ];

  constructor(private newsService: NewsService, private activedRoute: ActivatedRoute,private mainService: MainService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => this.routeId = +params['id']);
    this.mainService.message.subscribe({
      next: data => {
        this.lang = data;
        this.getAdvert();
        this.getNews(); 
      }
    })
  }

  getAdvert():void{
    this.newsService.getID(this.routeId,this.lang).subscribe({
      next: data => {
        this.advert = data;
        this.isLoading = false;
      }
    })
  }

  getNews():void{
    this.newsService.get(0,this.lang).subscribe({
      next: data => {
        this.news = data.data.filter(data => data.id != this.routeId)
      }
    })
  }

  navigateToCard(id:number){
    this.isLoading = true;
    this.newsService.getID(id,this.lang).subscribe({
      next: data => {
        this.advert = data;
        this.isLoading = false;
      }
    })
    this.newsService.get(0,this.lang).subscribe({
      next: data => {
        this.news = data.data.filter(data => data.id != this.routeId)
      }
    })
  }
}
