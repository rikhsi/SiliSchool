import { Component, OnInit, ViewChild } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { EffectFade,SwiperOptions, Autoplay} from "swiper";
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

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

  constructor(private newsService: NewsService, private router: Router,private mainService: MainService) { 
    SwiperCore.use([Autoplay, EffectFade]);
  }

  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.getData(data);
      }
    })
  }

  getData(lang:string):void{
    this.isLoading = true;
    this.newsService.get(0,lang).subscribe({
      next: data => {
        this.adverts = data.data;
        this.isLoading = false;
      }
    })
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
