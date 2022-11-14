import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {SwiperOptions, Autoplay} from "swiper";
import { Adminstration } from 'src/app/models/adminstration';
import { AdminstrationService } from 'src/app/services/adminstration.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.less']
})
export class AdministrationComponent implements OnInit {
  title: string = 'adminstration.title';
  fallback:string = '../../../../assets/img/fallback.png';
  isLoading: boolean = true;
  isEmpty: boolean = false;
  administrations: Adminstration[] = [];
  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 24,
    touchEventsTarget: 'container',
    grabCursor: true,
    autoplay: {
      delay: 10000
    },
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 4,
      checkInView: true,
      loadOnTransitionStart: true
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3.1,
      },
      767: {
        slidesPerView: 2.5,
      },
      575: {
        slidesPerView: 1.8,
      },
      450: {
        slidesPerView: 1.4,
      },
      400: {
        slidesPerView: 1.1,
      },
      300: {
        slidesPerView: 1,
      },
    }
  };

  constructor(private adminstrationService: AdminstrationService,private mainService: MainService) { 
    SwiperCore.use([Autoplay]);
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
    this.adminstrationService.get(lang).subscribe({
      next: data => {
        if(data.length === 0){
          this.isEmpty = true;
        } else{
          this.administrations = data;
          this.isEmpty = false;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.isEmpty = true;
      }
    })
  }

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.swiper?.swiperRef.slidePrev(300);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(300);
  }

}
