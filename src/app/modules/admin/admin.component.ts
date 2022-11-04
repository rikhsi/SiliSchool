import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from 'src/app/services/main.service';
import { FaqComponent } from './components/faq/faq.component';

@Component({
  selector: 'sili-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [NzMessageService]
})
export class AdminComponent implements OnInit {
  isLoading = false;
  isTable: boolean = true;
  translateTexts: any;
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

  changePage(id:number):void{
    this.pages.find(data => {
      if(data.id === id){
        data.isShow = true
      } else{
        data.isShow = false
      }
    })
  }

  refresh():void {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 1000);
    this.msg.success(this.translateTexts.reload.success);
  }

  changeLang():void{
    if(this.isRu){
      this.translate.use('ru')
      this.msg.success(this.translateTexts.lang.success);
      this.isRu = !this.isRu;
      this.getTranslate();
      this.refresh();
    } else{
      this.translate.use('uz')
      this.msg.success(this.translateTexts.lang.success);
      this.isRu = !this.isRu;
      this.getTranslate();
      this.refresh();
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
}
