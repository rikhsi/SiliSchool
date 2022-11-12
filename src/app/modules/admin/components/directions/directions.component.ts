import { Component,EventEmitter,Input, OnInit, Output} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzImageService } from 'ng-zorro-antd/image';
import { Direction } from 'src/app/models/direction';
import { DirectionsService } from 'src/app/services/directions.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.less'],
  providers: [NzMessageService, NzModalService,NzImageService]
})
export class DirectionsComponent implements OnInit {
  @Input() translateTexts!: any;
  @Input() isTable: boolean = false;
  @Output() isDirection = new EventEmitter;
  @Output() changeToEdit = new EventEmitter;
  lang!:string;
  id!: number;
  description_ru!: string;
  description_uz!: string;
  uploading!: boolean;
  isLoading!: boolean;
  createForm!: FormGroup;
  directions!: Direction[];
  confirmModal?: NzModalRef;
  fallback:string = '../../../../../assets/img/fallback.png';

  constructor(private mainService: MainService, private directionsService: DirectionsService, private msg: NzMessageService,private fb: FormBuilder,private modalService: NzModalService) { 
    this.createForm = this.fb.group({
      description_uz: [null, [Validators.required]],
      description_ru: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.mainService.message.subscribe({
      next: data => {
        this.lang = data;
        this.get(data);
      }
    })
  }

  get(lang:string):void{
    this.isLoading = true;
    this.directionsService.get(lang).subscribe({
      next: data => {
        this.directions = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.msg.error(this.translateTexts.reload.error);
      }
    })
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
        this.isTable = false;
        this.isDirection.emit(true);
        this.changeToEdit.emit(true);        
        this.id = id;
      }
    })
  }

  submit(): void {
    console.log(this.id)
    if (this.createForm.valid ) {
      this.directionsService.edit(this.id,this.createForm.value).subscribe({
        next: () => {
          this.get(this.lang);
        },
        error: () => {
          console.log('error')
        }
      })
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
