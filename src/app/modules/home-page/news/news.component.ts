import { Component, OnInit, ViewChild } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { EffectFade,SwiperOptions, Autoplay} from "swiper";
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sili-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  title: string = 'news.title';
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
    },
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 1,
      checkInView: true,
      loadOnTransitionStart: true
    }
  };

  constructor(private newsService: NewsService, private router: Router) { 
    SwiperCore.use([Autoplay, EffectFade]);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.adverts = this.newsService.adverts;
      this.isLoading = false;
    }, 2000);
  }

  navigate(): void{
    setTimeout(() => {
      this.router.navigate(['/news'])
    }, 300);
  }

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.swiper?.swiperRef.slidePrev(300);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(300);
  }
}
