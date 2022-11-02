import { Injectable } from '@angular/core';
import { Teacher } from '../models/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  teachers: Teacher[] = [
    {
      name: 'Omonbek Rikhsimboyev',
      file: ''
    },
    {
      name: 'Omonbek Rikhsimboyev',
      file: ''
    },
    {
      name: 'Omonbek Rikhsimboyev',
      file: ''
    },
    {
      name: 'Omonbek Rikhsimboyev',
      file: ''
    },
    {
      name: 'Omonbek Rikhsimboyev',
      file: ''
    }
  ]
  constructor() { }
}
