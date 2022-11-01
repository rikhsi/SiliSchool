import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {SwiperOptions, Autoplay} from "swiper";
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sili-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  title: string = 'gallery.title';
  isLoading: boolean = true;
  fallback:string = '../../../../assets/img/fallback.png';
  galleries!: Gallery[];
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 24,
    touchEventsTarget: 'container',
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 10000
    },
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2,
      checkInView: true,
      loadOnTransitionStart: true
    }
  };

  constructor(private galleryService: GalleryService, private router: Router) { 
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.galleries = this.galleryService.galleries;
      this.isLoading = false;
    }, 2000);
  }

  navigate(): void{
    setTimeout(() => {
      this.router.navigate(['/gallery'])
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
