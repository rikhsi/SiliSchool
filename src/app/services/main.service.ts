import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  schoolNumber: number = 15;
  schoolPhone: string = '(7071)-6-38-72';
  schoolLocation: string = 'Ташкент, Мирзо Угугбекский район, 6 квартал, 29';
  youTube: string = 'https://www.youtube.com/';
  instagram: string = 'https://www.instagram.com/';
  locationLink: string = 'https://yandex.uz/maps/114900/chirchiq/house/YkAYcw9jTEwFQFprfXh2cXprYw==/?ll=69.584195%2C41.471167&z=18.4';
  
  constructor() { }
}
