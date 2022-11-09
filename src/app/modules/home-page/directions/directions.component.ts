import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {SwiperOptions, Autoplay} from "swiper";
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sili-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.less']
})
export class DirectionsComponent implements OnInit {
  title: string = 'directions.title';
  isLoading: boolean = true;
  fallback:string = '../../../../assets/img/fallback.png';
  directions!: Direction[];
  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 24,
    touchEventsTarget: 'container',
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 10000
    },
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
      checkInView: true,
      loadOnTransitionStart: true
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2.8,
      },
      767: {
        slidesPerView: 2.4,
      },
      575: {
        slidesPerView: 1.7,
      },
      450: {
        slidesPerView: 1.3,
      },
      400: {
        slidesPerView: 1.2,
      },
      300: {
        slidesPerView: 1,
      },
    }
  };

  constructor(private directionsService: DirectionsService,private router: Router) { 
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {
    setTimeout(() => {
      // this.directions = this.directionsService.directions;
      this.isLoading = false;
    }, 2000);
  }

  navigate(): void{
    setTimeout(() => {
      this.router.navigate(['/directions'])
    }, 300);
  }

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.swiper?.swiperRef.slidePrev(700);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(700);
  }

}
