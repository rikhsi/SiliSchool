import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const api = 'http://bmsm33.uz/api/';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isHome!: boolean;
  lang: string = 'uz'
  schoolNumber: number = 33;
  schoolPhone: string = '70-965-71-07';
  locationLink: string = "https://www.google.com/maps/place/41°24'57.2%22N+69°18'35.1%22E/@41.415897,69.3075537,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.415897!4d69.3097424";
  
  constructor() { }

  private defaultPage = new BehaviorSubject<boolean>(this.isHome);
  isDefaultPage = this.defaultPage.asObservable();

  private defaultLang = new BehaviorSubject<string>(this.lang);
  message = this.defaultLang.asObservable();

  setPage(data: boolean): void {
    this.isHome = data
    this.defaultPage.next(this.isHome);
  }

  setLang(lang:string):void{
    this.defaultLang.next(lang)
  }
}
