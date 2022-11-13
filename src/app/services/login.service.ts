import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { api} from './main.service';

export interface Token {
  token:string
}

export let headers = { 'x-access-tokens': ''}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 isLogged!: boolean;

  constructor(private http: HttpClient,private router: Router) { }

  post(data: JSON){
    return this.http.post<Token>(api+'login',data);
  }

  setToken(token: string){
    localStorage.setItem('dfmsadklfmsalkdfjsdklf', token);
  }

  getToken() {
    let token = localStorage.getItem('dfmsadklfmsalkdfjsdklf');
    if(token != null){
      headers['x-access-tokens'] = token;
    }
    return token
  }
}
