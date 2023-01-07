import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Faq } from 'src/app/models/faq';
import { FaqService } from 'src/app/services/faq.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent implements OnInit {
  @Output() isData = new EventEmitter();
  active: boolean = false;
  title: string = 'faq.title';
  faqs: Faq[] = [];
  customStyle = {
    background: '#FFF2B7',
    padding: '40px 0px',
    border: '0px 0px 1px 0px solid #CFD3D8'
  }
  constructor(private faqsService: FaqService, private mainService: MainService) { }
  
  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.getData(data);
      }
    })
  }

  getData(lang:string):void{
    this.faqsService.get(lang).subscribe({
      next: data => {
        this.faqs = data;
        if(this.faqs.length === 0){
          this.isData.emit(false);
        } else{
          this.isData.emit(true);
        }
      },
      error: () => {
        this.isData.emit(false);
      }
    })
  }
}
