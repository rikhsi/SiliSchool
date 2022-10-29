import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  schoolNumber!: number;
  schoolPhone!: string;
  currentLang: string = 'Ру';
  isLoading: boolean = false;
  @Output() changeStatus = new EventEmitter();

  constructor(private mainService: MainService,public translateService: TranslateService, private router: Router) { }

  ngOnInit(): void {
    this.schoolNumber = this.mainService.schoolNumber;
    this.schoolPhone = this.mainService.schoolPhone;
  }

  getLang():void{
    if(this.translateService.getDefaultLang() === 'ru'){
      this.currentLang = 'Ру'
    } else{
      this.currentLang = 'Uz'
    }
  }
  
  changeLang(data: string): void {
    this.translateService.use(data).subscribe({
      next: () => {
        if(data === 'ru'){
          this.currentLang = 'Ру'
          this.changeStatus.emit()
        } else{
          this.currentLang = 'Uz'
          this.changeStatus.emit()
        }
      }
    })
  }

  backHome():void{
    this.router.navigate(['/home'])
  }
}
