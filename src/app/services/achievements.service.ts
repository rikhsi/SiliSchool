import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Achievements } from '../models/achievement';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  achievements: Achievements[] = [
    {
      id: 1,
      img: 'https://media.gettyssimages.com/illustrations/certificate-illustration-id166055739?s=612x612',
      data: '2001/20/2001 - 14:00'
    },
    {
      id: 2,
      img: 'https://media.gettyimages.com/vectors/certificate-achievement-diploma-vector-id690545448?s=612x612',
      data: '2001/20/2001 - 14:00'
    },
    {
      id: 3,
      img: 'https://media.gettyimages.com/illustrations/certificate-illustration-id166055739?s=612x612',
      data: '2001/20/2001 - 14:00'
    },
  ]

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Achievements[]>(api + 'getAchievements');
  }

  delete(id: number){
    return this.http.delete(api + 'deleteAchievement' + `/${id}` )
  }

  post(data: FormData){
    return this.http.post(api + 'addAchievement', data )
  }

}
