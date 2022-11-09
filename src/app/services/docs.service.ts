import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docs } from '../models/docs';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  get(){
    return this.http.get<Docs[]>(api + 'getDocuments?=lang=ru')
  }

  post(formData: FormData){
    return this.http.post(api + 'addDocument', formData)
  }

  delete(id:number){
    return this.http.post(api + `deleteDocument/${id}`,'')
  }

  constructor(private http: HttpClient) { }


}
