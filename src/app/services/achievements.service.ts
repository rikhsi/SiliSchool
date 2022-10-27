import { Injectable } from '@angular/core';
import { Achievements } from '../models/achievements';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  achievements: Achievements[] = [
    {
      img: 'https://media.gettyimages.com/illustrations/certificate-illustration-id166055739?s=612x612'
    },
    {
      img: 'https://media.gettyimages.com/vectors/certificate-achievement-diploma-vector-id690545448?s=612x612'
    },
    {
      img: 'https://media.gettyimages.com/illustrations/certificate-illustration-id166055739?s=612x612'
    },
  ]

  constructor() { }
}
