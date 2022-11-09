import { Component, Input, OnInit} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NewsService } from 'src/app/services/news.service';
import { Advert } from 'src/app/models/advert';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'sili-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})
export class NewsComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = true;
  @Input() isLoading!: boolean;
  button: boolean = false;
  uploading: boolean = false;
  fileList: NzUploadFile[] = [];
  createForm!: FormGroup;
  news!: Advert[];
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private newsService: NewsService, private msg: NzMessageService,private fb: FormBuilder,private modalService: NzModalService,private nzImageService: NzImageService) { 
    this.createForm = this.fb.group({
      name_uz: [null, [Validators.required]],
      description_uz: [null, [Validators.required]],
      name_ru: [null, [Validators.required]],
      description_ru: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.get();
  }

  get():void{
    this.isLoading = true;
    this.newsService.get().subscribe({
      next: data => {
        this.news = data
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.msg.error(this.translateTexts.reload.error);
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
        this.newsService.delete(id).subscribe({
          next: () => {
            this.news = this.news.filter(data => data.id !== id);
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

  post(formdata: FormData):void{
    this.uploading = true;
    this.newsService.post(formdata).subscribe({
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

  preview(id: number,img: string):void{
    const images = [
      {
        src: img,
        width: 'auto',
        height: '60%'
      }
    ]
    this.nzImageService.preview(images);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.button = true;
      this.msg.error(this.translateTexts?.upload.errors.format);
      return false;
    }
    const isLt2M = file.size! / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.button = true;
      this.msg.error(this.translateTexts?.upload.errors.size);
      return false;
    }
    this.fileList = this.fileList.concat(file);
    return false;
  };
}
