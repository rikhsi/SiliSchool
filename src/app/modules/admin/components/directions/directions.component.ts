import { Component,Input, OnInit} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzImageService } from 'ng-zorro-antd/image';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';

@Component({
  selector: 'sili-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})
export class DirectionsComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = false;
  uploading: boolean = false;
  description_uz:string = '';
  description_ru:string = '';
  isLoading!: boolean;
  createForm!: FormGroup;
  directions!: Direction[];
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private directionsService: DirectionsService, private msg: NzMessageService,private fb: FormBuilder,private modalService: NzModalService) { 
    this.createForm = this.fb.group({
      description_uz: [this.description_uz, [Validators.required]],
      description_ru: [this.description_ru, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.get();
  }

  get():void{
    this.isLoading = true;
    this.directionsService.get().subscribe({
      next: data => {
        this.directions = data;
        this.isLoading = false;
        console.log(data)
      },
      error: () => {
        this.isLoading = false;
        this.msg.error(this.translateTexts.reload.error);
      }
    })
  }

  edit():void{
    this.isTable = false;
  }

  change(id:number):void{
    this.confirmModal = this.modalService.confirm({
      nzTitle: `${this.translateTexts.modal.change.title}`,
      nzContent: `${this.translateTexts.modal.change.content}`,
      nzCancelText: `${this.translateTexts.modal.change.cancel}`,
      nzOkText: "OK",
      nzCentered: true,
      nzClosable: false,
      nzOkDanger: true,
      nzAutofocus: null,
      nzOnOk: () => {
        
      }
    })
  }

  submit(): void {
    if (this.createForm.valid ) {
      
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
