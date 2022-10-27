import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {SwiperOptions, Autoplay} from "swiper";
import { Adminstration } from 'src/app/models/adminstration';
import { AdminstrationService } from 'src/app/services/adminstration.service';

@Component({
  selector: 'sili-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.less']
})
export class AdministrationComponent implements OnInit {
  title: string = 'adminstration.title';
  fallback:string = '../../../../assets/img/fallback.png';
  isLoading: boolean = true;
  teachers!: Adminstration[];
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    touchEventsTarget: 'container',
    grabCursor: true,
    autoplay: {
      delay: 10000
    }
  };

  constructor(private teachersService: AdminstrationService) { 
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {    
    setTimeout(() => {
      this.teachers = this.teachersService.teachers;
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
