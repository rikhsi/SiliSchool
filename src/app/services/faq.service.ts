import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faq } from '../models/faq';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Faq[]>(api + 'getFaqs?lang=ru')
  }

  post(data: JSON){
    return this.http.post(api + 'addFaq',data)
  }

  delete(id: number){
    return this.http.post(api + `deleteFaq/${id}`, '');
  }
}
