import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Direction } from '../models/direction';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Direction[]>(api + 'getDepartments?lang=ru')
  }
}
