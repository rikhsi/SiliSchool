import { Injectable } from '@angular/core';
import { Advert } from '../models/advert';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  adverts: Advert[] = [
    {
      data: '07/04/2022 - 11:42',
      title: 'Synergy Kids успешно продолжает работу Synergy Kids успешно продолжает работу',
      info: 'Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ. Команда Synergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ.',
      img: '../../../../assets/img/news.png'
    },
    {
      data: '07/04/2022 - 11:42',
      title: 'Synergy Kidsdasdas успешно продолжает работу',
      info: 'Команда Synerasdasgy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ.',
      img: 'https://www.ashinsaga.org/intl/documents/ashinaga-uganda-our-work-img-02-min-1.jpg'
    },
    {
      data: '07/04/2022 - 11:42',
      title: 'Synergy Kasdasdids успешно продолжает работу',
      info: 'Команда Syasdasdnergy Kids рада сообщить, что наш детский садик успешно продолжает работу и пополняет свои командные ресурсы профессиональными и творческими людьми, которые трудятся над созданием эффективным развивающих программ.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bc7EOEy_bOc-e2Md6XyT8HpuDKti20uaxGiky3D6wcIo7j2Ej_Z9WMHffN_WLTS4UaQ&usqp=CAU'
    },
  ]

  constructor() { }
}
