import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { TeachersService } from 'src/app/services/teachers.service';
import { Teacher } from 'src/app/models/teachers';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';

@Component({
  selector: 'sili-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})
export class TeachersComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = true;
  @Input() isLoading!: boolean;
  @Output() refresh = new EventEmitter;
  button: boolean = false;
  uploading: boolean = false;
  fileList: NzUploadFile[] = [];
  createForm!: FormGroup;
  teachers!: Teacher[];
  directions!: Direction[];
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private teachersService: TeachersService, private directionsService: DirectionsService, private msg: NzMessageService,private fb: FormBuilder,private modalService: NzModalService,private nzImageService: NzImageService) { 
    this.createForm = this.fb.group({
      nameUz: [null, [Validators.required]],
      nameRu: [null, [Validators.required]],
      department: [null,[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.teachers = this.teachersService.teachers;
    this.directions = this.directionsService.directions;
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
        this.teachers = this.teachers.filter(data => data.id !== id);
        this.msg.success(this.translateTexts.delete.success);
        this.refresh.emit();
      }
    })
  }

  submit(): void {
    if (this.createForm.valid && this.fileList.length > 0) {
      const formData = new FormData();
      this.fileList.forEach((file: any) => {
        formData.append('file', file);
      });
      this.uploading = true;
      setTimeout(() => {
        this.uploading = false;
      }, 1000);
      this.button = false;
      this.createForm.reset();
      this.fileList = [];
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
}
