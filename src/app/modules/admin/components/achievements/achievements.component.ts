import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() isLoading!: boolean;
  @Output() getList = new EventEmitter;
  uploading = false;
  fileList: NzUploadFile[] = [];
  achievements!: Achievements[];
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private achievementsService: AchievementsService,private msg: NzMessageService,private modalService: NzModalService,private nzImageService: NzImageService) { }

  ngOnInit(): void {
    // this.achievementsService.get().subscribe({
    //   next: data => {
    //     console.log(data)
    //   }
    // })
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
        this.achievements = this.achievements.filter(data => data.id !== id);
        this.msg.success(this.translateTexts.delete.success);
        this.getList.emit();
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
