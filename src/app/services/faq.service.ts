import { Injectable } from '@angular/core';
import { Faq } from '../models/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faqs: Faq[] = [
    {
      id: 1,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 2,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 3,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 4,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 5,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 6,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 7,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 8,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 9,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
    {
      id: 10,
      question: 'Как можно связаться с ветеринаром/зоотехником?',
      answer: 'Связаться с ветеринарами и зоотехниками ВетЭксперт можно устно по телефону или письменно в чате личного кабинета.'
    },
  ]

  constructor() { }
}