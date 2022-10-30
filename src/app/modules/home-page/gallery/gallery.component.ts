import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {SwiperOptions, Autoplay} from "swiper";
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

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
    }
  };

  constructor(private galleryService: GalleryService) { 
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.galleries = this.galleryService.galleries;
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
