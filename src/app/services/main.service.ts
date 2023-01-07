import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const api = 'https://bmsm15.uz/api/';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isHome!: boolean;
  lang: string = 'uz';
  schoolNumber: number = 15;
  email: string = 'a.navai307@mail.ru'
  schoolPhone: string = '7071-6-38-72';
  locationLink: string = "https://goo.gl/maps/UMjvAZcy9z4MGJv36";
  
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
