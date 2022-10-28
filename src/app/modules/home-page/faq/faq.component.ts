import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/models/faq';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'sili-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent implements OnInit {
  active: boolean = false;
  title: string = 'faq.title';
  faqs!: Faq[];
  customStyle = {
    background: '#FFF2B7',
    padding: '40px 0px',
    border: '0px 0px 1px 0px solid #CFD3D8'
  }

  constructor(private faqsService: FaqService) { }

  ngOnInit(): void {
    this.faqs = this.faqsService.faqs;
  }
}
