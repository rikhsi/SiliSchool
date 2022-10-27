import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class AdminstrationService {

  teachers: Teacher[] = [
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
    {
      img: 'http://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
  ]

  constructor() { }
}
