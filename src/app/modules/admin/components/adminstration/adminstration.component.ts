import { Component,Input, OnInit} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Adminstration, Profession } from 'src/app/models/adminstration';
import { AdminstrationService } from 'src/app/services/adminstration.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})

export class AdminstrationComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = true;
  isLoading!: boolean;
  lang!:string;
  button: boolean = false;
  uploading: boolean = false;
  fileList: NzUploadFile[] = [];
  createForm!: FormGroup;
  adminstrations: Adminstration[] = []
  professions!: Profession[];
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private adminstrationsService: AdminstrationService,private mainService: MainService, private msg: NzMessageService,private fb: FormBuilder,private modalService: NzModalService,private nzImageService: NzImageService) { 
    this.createForm = this.fb.group({
      name_uz: [null, [Validators.required]],
      name_ru: [null, [Validators.required]],
      profession_id: [null,[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.lang = data;
        this.get(data);
        this.adminstrationsService.getProfession(data).subscribe({
          next: data => {
            this.professions = data;
          }
        })
      }
    })
  }

  get(lang:string):void{
    this.isLoading = true;
    this.adminstrationsService.get(lang).subscribe({
      next: data => {
        this.adminstrations = data
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
    this.adminstrationsService.post(formData).subscribe({
      next: () => {
        this.uploading = false;
        this.createForm.reset();
        this.fileList = [];
        this.get(this.lang);
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
        this.adminstrationsService.delete(id).subscribe({
          next: () => {
            this.adminstrations = this.adminstrations.filter(data => data.id !== id);
            this.msg.success(this.translateTexts.delete.success);
          },
          error: () => {
            this.msg.error(this.translateTexts.delete.error);
          }
        })
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

  preview(img: string):void{
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
      this.msg.error(this.translateTexts?.upload.errors.format);
      return false;
    }
    const isLt2M = file.size! / 1024 / 1024 < 8;
    if (!isLt2M) {
      this.msg.error(this.translateTexts?.upload.errors.size);
      return false;
    }
    this.fileList = this.fileList.concat(file);
    return false;
  };

}
