import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  galleries: Gallery[] = [
    {
      id: 1,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg',
      data: '20-01-2001 - 14:00'
    },  
    {
      id: 2,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg',
      data: '20-01-2001 - 14:00'
    }, 
    {
      id: 3,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg',
      data: '20-01-2001 - 14:00'
    }, 
    {
      id: 4,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg',
      data: '20-01-2001 - 14:00'
    }, 
    {
      id: 5,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg',
      data: '20-01-2001 - 14:00'
    }, 
    {
      id: 6,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg',
      data: '20-01-2001 - 14:00'
    }, 
  ];
  
  constructor() { }
}
