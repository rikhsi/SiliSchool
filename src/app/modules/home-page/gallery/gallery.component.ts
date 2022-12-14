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
  isEmpty: boolean = false;
  fallback:string = '../../../../assets/img/fallback.png';
  galleries: Gallery[] = [];
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
      loadPrevNextAmount: 2,
      checkInView: true,
      loadOnTransitionStart: true
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1.7,
      },
      575: {
        slidesPerView: 1.5,
      },
      450: {
        slidesPerView: 1.3,
      },
      400: {
        slidesPerView: 1.1
      },
      300: {
        slidesPerView: 1,
      },
    }
  };

  constructor(private galleryService: GalleryService, private router: Router) { 
    SwiperCore.use([Autoplay]);
  }

  ngOnInit(): void {
    this.getData();
  }

  navigate(): void{
    setTimeout(() => {
      this.router.navigate(['/gallery'])
    }, 300);
  }

  getData():void{
    this.isLoading = true;
    this.galleryService.get(0).subscribe({
      next: data => {
        if(data.data.length === 0){
          this.isEmpty = true;
        } else{
          this.galleries = data.data;
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
    this.swiper?.swiperRef.slidePrev(700);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(700);
  }
}
