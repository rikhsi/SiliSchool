import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  galleries: Gallery[] = [
    {
      id: 1,
      img: 'https://i.redd.it/38aeu51hq3d61.jpg'
    },
    {
      id: 2,
      img: '../../../../assets/img/banner.png'
    },
    {
      id: 3,
      img: '../../../../assets/imgs/banner.png'
    },
    {
      id: 4,
      img: 'https://i.redd.it/38aeu51hq3d61.jpg'
    },
    {
      id: 5,
      img: '../../../../assets/img/banner.png'
    },
    {
      id: 6,
      img: '../../../../assets/img/banner.png'
    }
  ];
  
  constructor() { }
}
