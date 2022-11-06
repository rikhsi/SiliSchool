import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminstration } from '../models/adminstration';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AdminstrationService {

  teachers: Adminstration[] = [
    {
      id: 1,
      img: 'https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
    {
      id: 2,
      img: 'https://www.nea.org/sites/default/files/styles/1920wide/public/legacy/2020/04/new_teacher-1-e1588171214853.jpeg?itok=ALfxF_qT',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
    {
      id: 3,
      img: 'http://www.educatsionnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
    {
      id: 4,
      img: 'http://www.educatsionnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
    {
      id: 5,
      img: 'http://www.educatsionnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher.png',
      name: 'Нилуфар Джалоловна',
      role: 'Директор'
    },
  ]

  get() {
    return this.http.get<Adminstration[]>(api + 'getAdministrations');
  }

  delete(id: number){
    return this.http.delete(api + 'deleteAdministration' + `/${id}`)
  }

  post(data: FormData){
    return this.http.post(api + 'addAdministration', data )
  }

  constructor(private http: HttpClient) { }
}
