import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Direction } from '../models/direction';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor(private http: HttpClient) { }

  get(lang:string){
    return this.http.get<Direction[]>(api + `getDepartments?lang=${lang}`)
  }

  getID(id:number, lang: string){
    return this.http.get<Direction>(api + `getDepartment/${id}?lang=${lang}`);
  }

  edit(id:number,data: JSON){
    return this.http.post(api + `updateDepartmentDescription/${id}`,data)
  }
}
