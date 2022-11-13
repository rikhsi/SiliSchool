import { Component,Input, OnInit} from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { DocsService } from 'src/app/services/docs.service';
import { Docs } from 'src/app/models/docs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { api, MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})

export class InfoComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = true;
  isLoading!: boolean;
  lang!:string;
  api:string = api;
  button: boolean = false;
  uploading:boolean = false;
  fileList: NzUploadFile[] = [];
  docs: Docs[] = [];
  createForm!: FormGroup;
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(
    private mainService: MainService,
    private docsService: DocsService,
    private msg: NzMessageService,
    private modalService: NzModalService,
    private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      name_uz: [null, [Validators.required]],
      name_ru: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.lang = data;
        this.get();
      }
    })
  }

  get():void{
    this.isLoading = true;
    this.docsService.get(this.lang).subscribe({
      next: data => {
        this.docs = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.msg.error(this.translateTexts.reload.error);
      }
    })
  }

  post(formData: FormData):void{
    this.uploading = true;
    this.docsService.post(formData).subscribe({
      next: () => {
        this.uploading = false;
        this.createForm.reset();
        this.fileList = [];
        this.get();
        this.msg.success(this.translateTexts.add.success)
      },
      error: () => {
        this.uploading = false;
        this.msg.error(this.translateTexts.add.error)
      }
    })
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
        this.docsService.delete(id).subscribe({
          next: () => {
            this.docs = this.docs.filter(data => data.id !== id);
            this.msg.success(this.translateTexts.delete.success);
          },
          error: () => {
            this.msg.error(this.translateTexts.delete.error);
          }
        })
      }
    })
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    const isJpgOrPng = file.type 
    === 'application/pdf' || file.type
    === 'application/msword' || file.type 
    === 'application/vnd.ms-excel' || file.type 
    === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type 
    === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    if (!isJpgOrPng) {
      this.button = true;
      this.msg.error(this.translateTexts?.upload.docs.format);
      return false;
    }
    const isLt2M = file.size! / 1024 / 1024 < 8;
    if (!isLt2M) {
      this.button = true;
      this.msg.error(this.translateTexts?.upload.docs.size);
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
      formData.append('data', JSON.stringify(this.createForm.value))
      this.button = false;
      this.post(formData)
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
