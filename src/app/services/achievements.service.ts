import { Injectable } from '@angular/core';
import { Achievements } from '../models/achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  achievements: Achievements[] = [
    {
      id: 1,
      img: 'https://media.gettyssimages.com/illustrations/certificate-illustration-id166055739?s=612x612'
    },
    {
      id: 2,
      img: 'https://media.gettyimages.com/vectors/certificate-achievement-diploma-vector-id690545448?s=612x612'
    },
    {
      id: 3,
      img: 'https://media.gettyimages.com/illustrations/certificate-illustration-id166055739?s=612x612'
    },
  ]

  constructor() { }
}
