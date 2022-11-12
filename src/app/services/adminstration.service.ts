import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminstration, Profession } from '../models/adminstration';
import { headers } from './login.service';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AdminstrationService {

  get(lang:string) {
    return this.http.get<Adminstration[]>(api + `getAdministrations?lang=${lang}`);
  }

  delete(id: number){
    return this.http.post(api + `deleteAdministration/${id}`,'',{headers})
  }

  post(data: FormData){
    return this.http.post(api + 'addAdministration', data ,{headers});
  }

  getProfession(lang: string){
    return this.http.get<Profession[]>(api + `getProfessions?lang=${lang}`);
  }

  constructor(private http: HttpClient) { }
}
