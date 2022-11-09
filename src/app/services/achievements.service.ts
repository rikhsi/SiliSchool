import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achievements } from '../models/achievement';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Achievements[]>(api + 'getAchievements');
  }

  delete(id: number){
    return this.http.post(api + `deleteAchievement/${id}`,'')
  }

  post(data: FormData){
    return this.http.post(api + 'addAchievement', data )
  }

}
