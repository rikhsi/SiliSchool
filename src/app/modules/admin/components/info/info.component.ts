import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { DocsService } from 'src/app/services/docs.service';
import { Docs } from 'src/app/models/docs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sili-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})
export class InfoComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = true;
  @Input() isLoading!: boolean;
  @Output() refresh = new EventEmitter;
  button: boolean = false;
  uploading = false;
  fileList: NzUploadFile[] = [];
  docs!: Docs[];
  createForm!: FormGroup;
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private docsService: DocsService,private msg: NzMessageService,private modalService: NzModalService,private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      titleUz: [null, [Validators.required]],
      titleRu: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.docs = this.docsService.docs;
  }

  delete(id: number): void {
    this.confirmModal = this.modalService.confirm({
      nzTitle: `${this.translateTexts.modal.delete.title}`,
      nzContent: `${this.translateTexts.modal.delete.content}`,
      nzCancelText: `${this.translateTexts.modal.delete.cancel}`,
      nzOkText: "OK",
      nzCentered: true,
      nzClosable: false,
      nzOkDanger: true,
      nzAutofocus: null,
      nzOnOk: () => {
        this.docs = this.docs.filter(data => data.id !== id);
        this.msg.success(this.translateTexts.delete.success);
        this.refresh.emit();
      }
    })
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.msg.error(this.translateTexts?.upload.errors.format);
      return false;
    }
    const isLt2M = file.size! / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error(this.translateTexts?.upload.errors.size);
      return false;
    }
    this.fileList = this.fileList.concat(file);
    return false;
  };

  reset(e: MouseEvent): void {
    e.preventDefault();
    this.createForm.reset();
    this.fileList = [];
    this.button = false;
    for (const key in this.createForm.controls) {
      if (this.createForm.controls.hasOwnProperty(key)) {
        this.createForm.controls[key].markAsPristine();
        this.createForm.controls[key].updateValueAndValidity();
      }
    }
  }

  submit(): void {
    if (this.createForm.valid && this.fileList.length > 0) {
      const formData = new FormData();
      this.fileList.forEach((file: any) => {
        formData.append('file', file);
      });
      this.createForm.reset();
      this.fileList = [];
      this.button = false;
      this.refresh.emit();
      this.msg.success(this.translateTexts.add.success)
    } else {
      Object.values(this.createForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
        if(this.fileList.length === 0){
          this.button = true;
        }
      });
    }
  }
}
