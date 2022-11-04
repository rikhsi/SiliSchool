import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Faq } from 'src/app/models/faq';
import { FaqService } from 'src/app/services/faq.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'sili-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less'],
  providers: [NzMessageService, NzModalService]
})
export class FaqComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = true;
  @Input() isLoading!: boolean;
  @Output() refresh = new EventEmitter;
  createForm!: FormGroup;
  faqs!: Faq[];
  confirmModal?: NzModalRef;

  constructor(private faqsService: FaqService, private msg: NzMessageService,private fb: FormBuilder,private modal: NzModalService) { 
    this.createForm = this.fb.group({
      questionUz: [null, [Validators.required]],
      answerUz: [null, [Validators.required]],
      questionRu: [null, [Validators.required]],
      answerRu: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.faqs = this.faqsService.faqs;
  }

  delete(id: number): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: `${this.translateTexts.modal.delete.title}`,
      nzContent: `${this.translateTexts.modal.delete.content}`,
      nzCancelText: `${this.translateTexts.modal.delete.cancel}`,
      nzOkText: "OK",
      nzCentered: true,
      nzClosable: false,
      nzOkDanger: true,
      nzAutofocus: null,
      nzOnOk: () => {
        this.faqs = this.faqs.filter(data => data.id !== id);
        this.msg.success(this.translateTexts.delete.success);
        this.refresh.emit();
      }
    })
  }

  submit(): void {
    if (this.createForm.valid) {
      this.refresh.emit();
      this.msg.success(this.translateTexts.add.success)
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
