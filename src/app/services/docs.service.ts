import { Injectable } from '@angular/core';
import { Docs } from '../models/docs';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  docs: Docs[] = [
    {
      title: 'Barone LLC. Barone LLC. Barone LLC. Barone LLC. Barone LLC.',
      file: ''
    },
    {
      title: 'Barone LLC.',
      file: ''
    },
    {
      title: 'Barone LLC.',
      file: ''
    },
    {
      title: 'Barone LLC.',
      file: ''
    },
    {
      title: 'Barone LLC.',
      file: ''
    },
    {
      title: 'Barone LLC.',
      file: ''
    }
  ]

  constructor() { }
}
