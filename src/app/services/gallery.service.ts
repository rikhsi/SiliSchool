import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Galleries, Gallery } from '../models/gallery';
import { api } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  get(page:number){
    return this.http.get<Galleries>(api + `getGalleries?page=${page}`)
  }

  post(formData: FormData){
    return this.http.post(api + 'addGallery',formData)
  }

  delete(id:number){
    return this.http.post(api + `deleteGallery/${id}`,'')
  }
  
  constructor(private http: HttpClient) { }
}
