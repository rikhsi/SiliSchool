import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  galleries: Gallery[] = [
    {
      id: 1,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg'
    },  
    {
      id: 1,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg'
    }, 
    {
      id: 1,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg'
    }, 
    {
      id: 1,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg'
    }, 
    {
      id: 1,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg'
    }, 
    {
      id: 1,
      img: 'http://studyinrussia.ru/upload/iblock/6ba/6badbac79123f90a84f996e05d666e19.jpg'
    }, 
  ];
  
  constructor() { }
}
