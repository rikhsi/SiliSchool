import { Component, OnInit, ViewChild } from '@angular/core';
import { Achievements } from 'src/app/models/achievement';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {SwiperOptions, Autoplay} from "swiper";
import { AchievementsService } from 'src/app/services/achievements.service';

@Component({
  selector: 'sili-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.less']
})
export class AchievementsComponent implements OnInit {
  title: string = 'achievements.title';
  fallback:string = '../../../../assets/img/fallback.png';
  isLoading: boolean = true;
  isEmpty: boolean = false;
  achievements: Achievements[] = [];
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 24,
    touchEventsTarget: 'container',
    grabCursor: true,
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
        slidesPerView: 2.2,
      },
      691: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1.7,
      },
      480: {
        slidesPerView: 1.4,
      },
      410: {
        slidesPerView: 1.2
      },
      300: {
        slidesPerView: 1,
      },
  }
} 
  
  constructor(private achievementsService: AchievementsService) { 
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.isLoading = true;
    this.achievementsService.get().subscribe({
      next: data => {
        if(data.length === 0){
          this.isEmpty = true;
        } else{
          this.achievements = data;
          this.isEmpty = false;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isEmpty = true;
        this.isLoading = false;
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
