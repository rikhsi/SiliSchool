import { Injectable } from '@angular/core';
import { Teacher } from '../models/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  teachers: Teacher[] = [
    {
      id: 1,
      img: 'https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg',
      name: 'Omonbek Rikhsimboyev',
      file: '',
      department: 'Фортепиано'
    },
    {
      id: 2,
      img: 'https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg',
      name: 'Omonbek Rikhsimboyev',
      file: '',
      department: 'Фортепиано'
    },
    {
      id: 3,
      img: 'https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg',
      name: 'Omonbek Rikhsimboyev',
      file: '',
      department: 'Фортепиано'
    },
    {
      id: 4,
      img: 'https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg',
      name: 'Omonbek Rikhsimboyev',
      file: '',
      department: 'Фортепиано'
    }
  ]
  constructor() { }
}
