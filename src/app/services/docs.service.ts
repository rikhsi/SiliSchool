import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docs } from '../models/docs';
import { headers } from './login.service';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  get(lang:string){
    return this.http.get<Docs[]>(api + `getDocuments?lang=${lang}`)
  }

  post(formData: FormData){
    return this.http.post(api + 'addDocument', formData,{headers})
  }

  delete(id:number){
    return this.http.post(api + `deleteDocument/${id}`,'',{headers})
  }

  constructor(private http: HttpClient) { }
}
