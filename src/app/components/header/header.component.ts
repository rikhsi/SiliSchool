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
  @Output() animate = new EventEmitter();
  @Output() lang = new EventEmitter();
  isBurger: boolean = false;
  schoolNumber!: number;
  schoolPhone!: string;
  currentLang!: string;

  constructor(private mainService: MainService,public translateService: TranslateService, private router: Router) { }

  ngOnInit(): void {
    this.schoolNumber = this.mainService.schoolNumber;
    this.schoolPhone = this.mainService.schoolPhone;
    this.getLang();
  }

  getLang():void{
    if(this.translateService.getDefaultLang() === 'ru'){
      this.currentLang = 'Ру'
      this.changeLang('ru')
    } else{
      this.currentLang = 'Uz'
      this.changeLang('uz')
    }
  }
  
  changeLang(data: string): void {
    this.translateService.use(data).subscribe({
      next: () => {
        if(data === 'ru'){
          this.currentLang = 'Ру'
          this.animate.emit();
          this.lang.emit();
          this.mainService.setLang('ru');
        } else{
          this.currentLang = 'Uz'
          this.animate.emit();
          this.lang.emit();
          this.mainService.setLang('uz');
        }
      }
    })
  }

  navigate(id: number):void{
    setTimeout(() => {
      switch(id){
        case 1: {
          this.router.navigate(['/directions'])
          this.isBurger = false;
          break
        }
        case 2: {
          this.router.navigate(['/docs'])
          this.isBurger = false;
          break
        }
        case 3: {
          this.router.navigate(['/gallery'])
          this.isBurger = false;
          break
        }
        case 4: {
          this.router.navigate(['/news'])
          this.isBurger = false;
          break
        }
      }
    }, 200);
  }

  backHome():void{
    setTimeout(() => {
      this.router.navigate([''])
    }, 20);
  
  }

  call():void{
    setTimeout(() => {
      window.open('tel:' + this.schoolPhone, "_self");
    }, 200);
  }
}
