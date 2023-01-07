import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { BreadCrump } from 'src/app/models/breadCrump';
import { MainService } from 'src/app/services/main.service';
import { NewsService } from 'src/app/services/news.service';
import SwiperCore, { FreeMode, Navigation, SwiperOptions, Thumbs } from "swiper";

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
  thumbsSwiper = null;
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
  
  configBig: SwiperOptions = {
    spaceBetween: 10,
    grabCursor: true,
  };

  configSmall: SwiperOptions = {
    slidesPerView: 'auto',
    touchEventsTarget: 'container',
    autoplay: {
      delay: 8000
    },
    freeMode: true,
    grabCursor: true,
    mousewheel: true,
    watchSlidesProgress: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
        direction: 'horizontal',
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 4.5,
        direction: 'horizontal',
        spaceBetween: 12,
      },
      850: {
        slidesPerView: 4.4,
        direction: 'horizontal',
      },
      768: {
        slidesPerView: 5,
        direction: 'horizontal',
      },
      575: {
        slidesPerView: 4.2,
        spaceBetween: 12,
        direction: 'horizontal',
      },
      360: {
        slidesPerView: 4,
        spaceBetween: 12,
        direction: 'horizontal',
      }
    }
  };

  constructor(private newsService: NewsService, private activedRoute: ActivatedRoute,private mainService: MainService,private router: Router) { 
    SwiperCore.use([FreeMode, Navigation, Thumbs]);
  }

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
    this.isLoading = true;
    this.newsService.getID(this.routeId,this.lang).subscribe({
      next: data => {
        this.advert = data;
        this.isLoading = false;
        console.log(this.advert)
      },
      error: () => {
        this.router.navigate([''])
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
      },
      error: () => {
        this.isLoading = false;
      }
    })
    this.getNews();
  }
}
