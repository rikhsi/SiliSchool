import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';

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
  @Output() refresh = new EventEmitter;
  uploading = false;
  fileList: NzUploadFile[] = [];
  gallery!: Gallery[];
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private galleryService: GalleryService,private msg: NzMessageService,private modalService: NzModalService,private nzImageService: NzImageService) { }

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
        this.refresh.emit();
      }
    })
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

  submit(): void {
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('file', file);
    });
    this.uploading = true;
    setTimeout(() => {
      this.uploading = false;
    }, 1000);
  }
}
