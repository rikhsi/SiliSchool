import { Component, Input, OnInit} from '@angular/core';
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
  createForm!: FormGroup;
  faqs!: Faq[];
  confirmModal?: NzModalRef;

  constructor(private faqsService: FaqService, private msg: NzMessageService,private fb: FormBuilder,private modal: NzModalService) { 
    this.createForm = this.fb.group({
      question_uz: [null, [Validators.required]],
      answer_uz: [null, [Validators.required]],
      question_ru: [null, [Validators.required]],
      answer_ru: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.get();
  }

  get():void{
    this.faqsService.get().subscribe({
      next: data => {
        this.faqs = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.msg.error(this.translateTexts.reload.error);
      }
    })
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
        this.faqsService.delete(id).subscribe({
          next: () => {
            this.faqs = this.faqs.filter(data => data.id !== id);
            this.msg.success(this.translateTexts.delete.success);
            this.get();
          },
          error: () => {
            this.msg.error(this.translateTexts.delete.error);
          }
        })
      }
    })
  }

  post(data:JSON):void{
    this.isLoading = true;
    this.faqsService.post(data).subscribe({
      next: () => {
        this.isLoading = false;
        this.createForm.reset();
        this.get();
        this.msg.success(this.translateTexts.add.success)
      },
      error: () => {
        this.isLoading = false;
        this.msg.error(this.translateTexts.add.error)
      }
    })
  }

  submit(): void {
    if (this.createForm.valid) {
        this.post(this.createForm.value);
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
