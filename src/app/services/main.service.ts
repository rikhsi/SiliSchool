import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  schoolNumber: number = 15;
  schoolPhone: string = '71-6-38-72'
  constructor() { }
}
