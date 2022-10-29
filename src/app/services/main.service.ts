import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  schoolNumber: number = 15;
  schoolPhone: string = '+9987071-6-38-72';
  schoolLocation: string = 'Ташкент, Мирзо Угугбекский район, 6 квартал, 29';
  youTube: string = 'https://www.youtube.com/';
  instagram: string = 'https://www.instagram.com/';
  
  constructor() { }
}
