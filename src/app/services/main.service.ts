import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const api = 'http://192.168.1.3:5000/';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isHome!: boolean;
  schoolNumber: number = 15;
  schoolPhone: string = '(7071)-6-38-72';
  schoolLocation: string = 'Ташкент, Мирзо Угугбекский район, 6 квартал, 29';
  youTube: string = 'https://www.youtube.com/';
  instagram: string = 'https://www.instagram.com/';
  locationLink: string = 'https://yandex.uz/maps/114900/chirchiq/house/YkAYcw9jTEwFQFprfXh2cXprYw==/?ll=69.584195%2C41.471167&z=18.4';
  
  private defaultPage = new BehaviorSubject<boolean>(this.isHome);
  isDefaultPage = this.defaultPage.asObservable();

  setPage(data: boolean): void {
    this.isHome = data
    this.defaultPage.next(this.isHome);
  }

  constructor() { }
}
