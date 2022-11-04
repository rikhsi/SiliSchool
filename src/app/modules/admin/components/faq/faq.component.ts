import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Faq } from 'src/app/models/faq';
import { FaqService } from 'src/app/services/faq.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { messages } from '../../messages/messages';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'sili-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less'],
  providers: [NzMessageService, NzModalService]
})
export class FaqComponent implements OnInit {
  @Input() modalTexts!: any;
  @Input() isTable: boolean = true;
  @Input() isLoading!: boolean;
  @Output() getList = new EventEmitter;
  createForm!: FormGroup;
  faqs!: Faq[];
  confirmModal?: NzModalRef;
  messages = messages;

  constructor(private faqsService: FaqService, private msg: NzMessageService,private fb: FormBuilder,private modal: NzModalService) { 
    this.createForm = this.fb.group({
      questionUz: [null, [Validators.required]],
      answerUz: [null, [Validators.required]],
      questionRu: [null, [Validators.required]],
      answerRu: [null, [Validators.required]],
      isActive: [true]
    })
  }

  ngOnInit(): void {
    this.faqs = this.faqsService.faqs;
  }

  checkVisibility(isShow: boolean,id: number):void {
    if(isShow){
      this.hide(id);
    } else{
      this.show(id);
    }
  }

  hide(id:number):void{
    this.confirmModal = this.modal.confirm({
      nzTitle: `${this.modalTexts.show.title.hide}`,
      nzContent: `${this.modalTexts.show.content}`,
      nzCancelText: `${this.modalTexts.show.cancel}`,
      nzOkText: "OK",
      nzCentered: true,
      nzClosable: false,
      nzOkDanger: true,
      nzAutofocus: null,
      nzOnOk: () => {
        this.faqs.filter(data => data.id === id ? data.isShow = !data.isShow : data.isShow = data.isShow);
        this.msg.success(this.messages.show.visible.ru.success);
        this.getList.emit();
      }
    })
  }

  show(id:number):void{
    this.confirmModal = this.modal.confirm({
      nzTitle: `${this.modalTexts.show.title.show}`,
      nzContent: `${this.modalTexts.show.content}`,
      nzCancelText: `${this.modalTexts.show.cancel}`,
      nzOkText: "OK",
      nzCentered: true,
      nzClosable: false,
      nzAutofocus: null,
      nzOnOk: () => {
        this.faqs.filter(data => data.id === id ? data.isShow = !data.isShow : data.isShow = data.isShow);
        this.msg.success(this.messages.show.visible.ru.success);
        this.getList.emit();
      }
    })
  }

  delete(id: number): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: `${this.modalTexts.delete.title}`,
      nzContent: `${this.modalTexts.delete.content}`,
      nzCancelText: `${this.modalTexts.delete.cancel}`,
      nzOkText: "OK",
      nzCentered: true,
      nzClosable: false,
      nzOkDanger: true,
      nzAutofocus: null,
      nzOnOk: () => {
        this.faqs = this.faqs.filter(data => data.id !== id);
        this.msg.success(this.messages.delete.ru.success);
        this.getList.emit();
      }
    })
  }

  submit(): void {
    if (this.createForm.valid) {
      this.getList.emit();
      this.msg.success(this.messages.add.ru.success)
    } else {
      Object.values(this.createForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  reset(e: MouseEvent): void {
    e.preventDefault();
    this.createForm.reset();
    for (const key in this.createForm.controls) {
      if (this.createForm.controls.hasOwnProperty(key)) {
        this.createForm.controls[key].markAsPristine();
        this.createForm.controls[key].updateValueAndValidity();
      }
    }
  }
}
