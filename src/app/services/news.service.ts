import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advert, Adverts } from '../models/advert';
import { headers } from './login.service';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  get(page:number,lang:string){
    return this.http.get<Adverts>(api + `getNews?lang=${lang}&page=${page}`)
  }

  getID(id:number, lang: string){
    return this.http.get<Advert>(api + `getNews/${id}?lang=${lang}`);
  }

  delete(id:number){
    return this.http.post(api + `deleteNews/${id}`,'' ,{headers} )
  }

  post(formdata: FormData){
    return this.http.post(api + `addNews`,formdata,{headers})
  }


  constructor(private http: HttpClient) { }
}
