import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MainService } from 'src/app/services/main.service';
import { FaqComponent } from './components/faq/faq.component';

@Component({
  selector: 'sili-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [NzMessageService]
})
export class AdminComponent implements OnInit {
  isTable: boolean = true;
  isDirection: boolean = false;
  translateTexts: any;
  confirmModal?: NzModalRef;
  isRu!: boolean;
  pages = [
    {
      name: 'gallery.title',
      id: 1,
      isShow: true,
      component: FaqComponent
    },
    {
      name: 'faq.title',
      id: 2,
      isShow: false
    },
    {
      name: 'news.title',
      id: 3,
      isShow: false
    },
    {
      name: 'docs.title',
      id: 4,
      isShow: false
    },
    {
      name: 'adminstration.title',
      id: 5,
      isShow: false
    },
    {
      name: 'teachers.title',
      id: 6,
      isShow: false
    },
    {
      name: 'directions.title',
      id: 7,
      isShow: false
    },
    {
      name: 'achievements.title',
      id: 8,
      isShow: false
    },
  ]

  constructor(private mainService: MainService,private msg: NzMessageService,public translate: TranslateService,private router:Router, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.getTranslate();
    setTimeout(() => {
      this.mainService.setPage(false)
    }, 0);
  }

  changePage(id:number):void{
    if(id === 7){
      this.isDirection = true;
    } else{
      this.isDirection = false;
    }
    this.pages.find(data => {
      if(data.id === id){
        data.isShow = true
      } else{
        data.isShow = false
      }
    })
  }

  changeLang(){
    if(this.isRu){
      this.mainService.setLang('ru');
      this.translate.use('ru').subscribe({
        next: () => {
          this.getTranslate();
          this.msg.success(this.translateTexts.lang.success);
          this.isRu = !this.isRu;
        }
      })
      return 'ru'
    } else{
      this.mainService.setLang('uz');
      this.translate.use('uz').subscribe({
        next: () => {
          this.getTranslate();
          this.msg.success(this.translateTexts.lang.success);
          this.isRu = !this.isRu;
        }
      })
      return 'uz'
    }
  }

  getTranslate():void {
    this.translate.get('admin').subscribe(data => {
      this.translateTexts = data;
    })
  }

  handleTable():void{
    this.isTable = !this.isTable;
  }

  navigate():void{
    this.confirmModal = this.modalService.confirm({
      nzTitle: `${this.translateTexts.modal.exit.title}`,
      nzContent: `${this.translateTexts.modal.exit.content}`,
      nzCancelText: `${this.translateTexts.modal.exit.cancel}`,
      nzOkText: "OK",
      nzCentered: true,
      nzClosable: false,
      nzOkDanger: true,
      nzAutofocus: null,
      nzOnOk: () => {
        setTimeout(() => {
          this.mainService.setPage(true)
          localStorage.removeItem('dfmsadklfmsalkdfjsdklf')
          this.router.navigate([''])
        }, 0)
      }
    })
  }

  handleEdit():void{
    this.isTable = !this.isTable;
  }
}
