import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faq } from '../models/faq';
import { api, MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  get(lang:string){
    return this.http.get<Faq[]>(api + `getFaqs?lang=${lang}`)
  }

  post(data: JSON){
    return this.http.post(api + 'addFaq',data)
  }

  delete(id: number){
    return this.http.post(api + `deleteFaq/${id}`, '');
  }
}
