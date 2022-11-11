import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable} from 'rxjs';
import { Advert } from '../models/advert';
import { MainService } from './main.service';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<Advert> {
  lang!:string;

  constructor(private newsService: NewsService, private router: Router, private mainService:MainService) { 
    this.mainService.message.subscribe({
      next: data => this.lang = data
    })
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Advert> {
    return this.newsService.getID(route.params?.['id'],this.lang).pipe(
      catchError(() => {
        this.router.navigate(['home'])
        return EMPTY
      })
    )
  }
}
