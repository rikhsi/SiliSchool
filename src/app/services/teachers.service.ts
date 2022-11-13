import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teachers';
import { headers } from './login.service';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

  get(lang:string){
    return this.http.get<Teacher[]>(api + `getTeachers?lang=${lang}`)
  }

  update(id:number,formData: FormData){
    return this.http.post(api + `updateTeacherTimetable/${id}`,formData, {headers})
  }

  post(formData: FormData){
    return this.http.post(api + 'addTeacher', formData,{headers})
  }

  delete(id: number){
    return this.http.post(api + `deleteTeacher/${id}`,'',{headers})
  }
}
