import { Injectable } from '@angular/core';
import { Advert } from '../models/advert';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  adverts: Advert[] = [
    {
      id: 1,
      data: '07/04/2022 - 11:42',
      title: '1Synergy Kids успешно продолжает работу Synergy Kids успешно продолжает работу',
      info: 'Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ. Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ.',
      img: '../../../../assets/img/news.png'
    },
    {
      id: 2,
      data: '07/04/2022 - 11:42',
      title: '2Synergy Kids успешно продолжает работу Synergy Kids успешно продолжает работу',
      info: 'Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ. Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ.',
      img: '../../../../assets/img/news.png'
    },
    {
      id: 3,
      data: '07/04/2022 - 11:42',
      title: 'Synergy Kids успешно продолжает работу Synergy Kids успешно продолжает работу',
      info: 'Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ. Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ.',
      img: '../../../../assets/img/news.png'
    },
    {
      id: 4,
      data: '07/04/2022 - 11:42',
      title: 'Synergy Kids успешно продолжает работу Synergy Kids успешно продолжает работу',
      info: 'Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ. Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ.',
      img: '../../../../assets/img/news.png'
    },
    {
      id: 5,
      data: '07/04/2022 - 11:42',
      title: 'Synergy Kids успешно продолжает работу Synergy Kids успешно продолжает работу',
      info: 'Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ. Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ.',
      img: '../../../../assets/img/news.png'
    },
  ]

  constructor() { }
}
