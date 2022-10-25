import { Component, OnInit, ViewChild } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { EffectFade,SwiperOptions, Autoplay} from "swiper";
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'sili-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  title: string = 'news.title';
  titleColor: string = '#4A4A4A';
  fallback:string = '../../../../assets/img/fallback.png';
  isLoading: boolean = true;
  adverts!: Advert[];
  config: SwiperOptions = {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    simulateTouch:false,
    fadeEffect: { crossFade: true, },
    autoplay: {
      delay: 10000
    }
  };

  constructor(private newsService: NewsService) { 
    SwiperCore.use([Autoplay, EffectFade]);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.adverts = this.newsService.adverts;
      this.isLoading = false;
    }, 2000);
  }

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.swiper?.swiperRef.slidePrev(300);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(300);
  }
}
