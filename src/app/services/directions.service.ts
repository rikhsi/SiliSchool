import { Injectable } from '@angular/core';
import { Direction } from '../models/direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {
  directions: Direction[] = [
    {
      id: 1,
      img: '../../assets/img/direction.png',
      title: 'Фортепиано',
      info: 'The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour'
    },
    {
      id: 2,
      img: '../../assets/img/direction.png',
      title: 'Фортепиано',
      info: 'The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour'
    },
    {
      id: 3,
      img: '../../assets/img/direction.png',
      title: 'Фортепиано',
      info: 'The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour'
    },
    {
      id: 4,
      img: '../../assets/img/direction.png',
      title: 'Фортепиано',
      info: 'The gradual accumulation of information about atomic and small-scale behaviour The gradual accumulation of information about atomic and small-scale behaviour'
    },
  ]
  
  constructor() { }
}
