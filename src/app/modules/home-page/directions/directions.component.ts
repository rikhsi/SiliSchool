import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {SwiperOptions, Autoplay} from "swiper";
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';

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
    slidesPerView: 3,
    spaceBetween: 24,
    touchEventsTarget: 'container',
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 10000
    }
  };

  constructor(private directionsService: DirectionsService) { 
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.directions = this.directionsService.directions;
      this.isLoading = false;
    }, 2000);
  }

  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.swiper?.swiperRef.slidePrev(700);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(700);
  }

}
