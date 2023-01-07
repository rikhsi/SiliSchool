import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'sili-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.less'],
  providers: [NzMessageService]
})
export class ConnectionPageComponent implements OnInit {
  showFaq: boolean = true;
  order!: FormGroup;
  isLoading: boolean = false;
  translateTexts: any;

  constructor(private fb: FormBuilder,public translate: TranslateService,private msg: NzMessageService,) { 
    this.order = this.fb.group({
      name: [null, [Validators.required,Validators.minLength(3)]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.email,Validators.required]],
      message: [null,[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getTranslate();
  }

  getTranslate():void {
    this.translate.get('form').subscribe(data => {
      this.translateTexts = data;
    })
  }

  submit(e:Event): void {
    if (this.order.valid) {
      this.getTranslate();
      this.isLoading = true;
      e.preventDefault();
      emailjs.sendForm('service_bdfsmcn', 'template_u1on07v', e.target as HTMLFormElement, 'Nfxiilkj-pSfCWfs5')
        .then(() => {
          this.order.reset();
          this.isLoading = false;
          this.msg.success(this.translateTexts.order.success);
        }, () => {
          this.isLoading = false;
          this.msg.error(this.translateTexts.order.error);
        });
    } else {
      Object.values(this.order.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  hideFaq(event: boolean):void{
    setTimeout(() => {
      this.showFaq = event;
    }, 0);
  }
}
