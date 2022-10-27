import { Injectable } from '@angular/core';
import { Direction } from '../models/direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {
  directions: Direction[] = [
    {
      img: '../../assets/img/direction.png',
      title: 'Фортепиано',
      info: 'The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour'
    },
    {
      img: '../../assets/img/direction.png',
      title: 'Фортепиано',
      info: 'The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour'
    },
    {
      img: '../../assets/img/direction.png',
      title: 'Фортепиано',
      info: 'The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour'
    },
    {
      img: '../../assets/img/direction.png',
      title: 'Фортепиано',
      info: 'The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour'
    }
  ]
  
  constructor() { }
}
