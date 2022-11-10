import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable} from 'rxjs';
import { Direction } from '../models/direction';
import { DirectionsService } from './directions.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionsResolver implements Resolve<Direction> {

  constructor(private directionsService: DirectionsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Direction> {
    return this.directionsService.getID(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['home'])
        return EMPTY
      })
    )
  }
}
