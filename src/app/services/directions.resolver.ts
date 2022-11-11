import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable} from 'rxjs';
import { Direction } from '../models/direction';
import { DirectionsService } from './directions.service';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionsResolver implements Resolve<Direction> {
  lang!:string;

  constructor(private directionsService: DirectionsService, private router: Router,private mainService: MainService) { 
    this.mainService.message.subscribe({
      next: data => this.lang = data
    })
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Direction> {
    return this.directionsService.getID(route.params?.['id'],this.lang).pipe(
      catchError(() => {
        this.router.navigate(['home'])
        return EMPTY
      })
    )
  }
}
