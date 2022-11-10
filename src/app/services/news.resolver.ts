import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable} from 'rxjs';
import { Advert } from '../models/advert';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<Advert> {

  constructor(private newsService: NewsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Advert> {
    return this.newsService.getID(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['home'])
        return EMPTY
      })
    )
  }
}
