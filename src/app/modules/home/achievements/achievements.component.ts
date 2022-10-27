import { Component, OnInit, ViewChild } from '@angular/core';
import { Achievements } from 'src/app/models/achievements';
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
  achievements!: Achievements[];
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 24,
    touchEventsTarget: 'container',
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 10000
    }
  };
  
  constructor(private achievementsService: AchievementsService) { 
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.achievements = this.achievementsService.achievements;
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
