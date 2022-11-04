import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from 'src/app/services/main.service';
import { FaqComponent } from './components/faq/faq.component';
import { messages } from './messages/messages';

@Component({
  selector: 'sili-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [NzMessageService]
})
export class AdminComponent implements OnInit {
  messages = messages;
  isLoading = false;
  isTable: boolean = true;
  modalTexts: any;
  isRu!: boolean;
  pages = [
    {
      name: 'gallery.title',
      id: 1,
      isShow: false,
      component: FaqComponent
    },
    {
      name: 'faq.title',
      id: 2,
      isShow: true
    },
    {
      name: 'news.title',
      id: 3,
      isShow: false
    },
    {
      name: 'faq.info',
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
    {
      name: 'docs.title',
      id: 8,
      isShow: false
    }
  ]

  constructor(private mainService: MainService,private msg: NzMessageService,public translate: TranslateService) { }

  ngOnInit(): void {
    this.getTranslate();
    setTimeout(() => {
      this.mainService.setPage(false)
    }, 0);
  }

  changePage(id:number){
    this.pages.find(data => {
      if(data.id === id){
        data.isShow = true
      } else{
        data.isShow = false
      }
    })
  }

  getList():void {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 1000);
  }

  reload():void{
    this.msg.success(this.messages.reload.ru.success);
    this.getList();
  }

  changeLang():void{
    if(this.isRu){
      this.translate.use('ru')
      this.msg.success(this.messages.lang.ru.success);
      this.isRu = !this.isRu;
      this.getTranslate();
      this.getList();
    } else{
      this.translate.use('uz')
      this.msg.success(this.messages.lang.uz.success);
      this.isRu = !this.isRu;
      this.getTranslate();
      this.getList();
    }
  }

  getTranslate():void {
    this.translate.get('admin.modal').subscribe(data => {
      this.modalTexts = data;
    })
  }

  handleTable():void{
    this.isTable = !this.isTable;
  }
}
