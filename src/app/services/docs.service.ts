import { Injectable } from '@angular/core';
import { Docs } from '../models/docs';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  docs: Docs[] = [
    {
      id: 1,
      title: 'Barone LLC. Barone LLC. Barone LLC. Barone LLC. Barone LLC.',
      file: '',
      data: '20.01.2001 - 14:00'
    },
    {
      id: 2,
      title: 'Barone LLC. Barone LLC. Barone LLC. Barone LLC. Barone LLC.',
      file: '',
      data: '20.01.2001 - 14:00'
    },
    {
      id: 3,
      title: 'Barone LLC. Barone LLC. Barone LLC. Barone LLC. Barone LLC.',
      file: '',
      data: '20.01.2001 - 14:00'
    },
    {
      id: 4,
      title: 'Barone LLC. Barone LLC. Barone LLC. Barone LLC. Barone LLC.',
      file: '',
      data: '20.01.2001 - 14:00'
    },
    {
      id: 5,
      title: 'Barone LLC. Barone LLC. Barone LLC. Barone LLC. Barone LLC.',
      file: '',
      data: '20.01.2001 - 14:00'
    },
    {
      id: 6,
      title: 'Barone LLC. Barone LLC. Barone LLC. Barone LLC. Barone LLC.',
      file: '',
      data: '20.01.2001 - 14:00'
    },
  ]

  constructor() { }
}
