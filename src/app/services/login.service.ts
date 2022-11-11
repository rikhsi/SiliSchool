import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api, MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  lang!:string;

  constructor(private http: HttpClient, private mainService: MainService) { 
    this.mainService.message.subscribe({
      next: data => {
        this.lang = data;
      },error: data => {
        console.log(data)
      }
    })
  }

  post(data: JSON){
    return this.http.post(api + 'login',data);
  }

}
