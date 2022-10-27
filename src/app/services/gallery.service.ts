import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  galleries: Gallery[] = [
    {
      img: 'https://i.redd.it/38aeu51hq3d61.jpg'
    },
    {
      img: '../../../../assets/img/banner.png'
    },
    {
      img: '../../../../assets/imgs/banner.png'
    },
    {
      img: 'https://i.redd.it/38aeu51hq3d61.jpg'
    },
    {
      img: '../../../../assets/img/banner.png'
    },
    {
      img: '../../../../assets/imgs/banner.png'
    }
  ];
  
  constructor() { }
}
