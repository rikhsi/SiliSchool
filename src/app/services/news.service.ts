import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advert } from '../models/advert';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  get(){
    return this.http.get<Advert[]>(api + `getNews?lang=ru&page=0`)
  }

  delete(id:number){
    return this.http.post(api + `deleteNews/${id}`,'' )
  }

  post(formdata: FormData){
    return this.http.post(api + `addNews`,formdata)
  }


  constructor(private http: HttpClient) { }
}
