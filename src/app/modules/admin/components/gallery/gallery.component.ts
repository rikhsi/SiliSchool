import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'sili-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})
export class GalleryComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = true;
  @Input() isLoading!: boolean;
  @Output() getList = new EventEmitter;
  gallery!: Gallery[];
  createForm!: FormGroup;
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private galleryService: GalleryService,private msg: NzMessageService,private fb: FormBuilder,private modalService: NzModalService,private nzImageService: NzImageService) { 
    this.createForm = this.fb.group({
      questionUz: [null, [Validators.required]],
      answerUz: [null, [Validators.required]],
      questionRu: [null, [Validators.required]],
      answerRu: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.gallery = this.galleryService.galleries;
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
        this.gallery = this.gallery.filter(data => data.id !== id);
        this.msg.success(this.translateTexts.delete.success);
        this.getList.emit();
      }
    })
  }

  submit(): void {
    if (this.createForm.valid) {
      this.getList.emit();
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
}
