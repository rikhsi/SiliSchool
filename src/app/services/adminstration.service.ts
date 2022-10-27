import { Injectable } from '@angular/core';
import { Adminstration } from '../models/adminstration';

@Injectable({
  providedIn: 'root'
})
export class AdminstrationService {

  teachers: Adminstration[] = [
    {
      img: 'http://www.educatsionnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
    {
      img: 'http://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
    {
      img: 'http://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
    {
      img: 'http://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
    {
      img: 'http://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
  ]

  constructor() { }
}
