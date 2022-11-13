import { Component,Input, OnInit } from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Achievements } from 'src/app/models/achievement';
import { AchievementsService } from 'src/app/services/achievements.service';

@Component({
  selector: 'sili-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})
export class AchievementsComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = true;
  achievements: Achievements[] = [];
  isLoading: boolean = false;
  uploading = false;
  fileList: NzUploadFile[] = [];
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private achievementsService: AchievementsService,private msg: NzMessageService,private modalService: NzModalService,private nzImageService: NzImageService) { }

  ngOnInit(): void {
    this.get();
  }

  get():void{
    this.isLoading = true;
    this.achievementsService.get().subscribe({
      next: data => {
          this.achievements = data;
          this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.msg.error(this.translateTexts.reload.error);
      }
    })
  }

  post(formData: FormData):void {
    this.uploading = true;
    this.achievementsService.post(formData).subscribe({
      next: () => {
          this.uploading = false;
          this.fileList = [];
          this.get();
          this.msg.success(this.translateTexts.add.success);
      },
      error: () => {
        this.uploading = false;
        this.msg.error(this.translateTexts.add.error);
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
        this.achievementsService.delete(id).subscribe({
          next: () => {
            this.achievements = this.achievements.filter(data => data.id !== id);
            this.msg.success(this.translateTexts.delete.success);
          },
          error: () => {
            this.msg.error(this.translateTexts.delete.error)
          }
        })
      }
    })
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

  submit(): void {
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('file', file);
    });
    this.post(formData);
  }
}
