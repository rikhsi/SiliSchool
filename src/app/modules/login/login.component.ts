
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginService } from 'src/app/services/login.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [NzMessageService]
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  translateTexts: any;

  constructor(private mainService: MainService, private fb: FormBuilder,private loginService: LoginService,private router: Router,private message: NzMessageService,public translate: TranslateService,) { 
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getTranslate();
    setTimeout(() => {
      this.mainService.setPage(false);
      if(this.loginService.getToken()){
        this.router.navigate(['admin'])
      }
    }, 0); 
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginService.post(this.validateForm.value).subscribe({
        next: data => {
          this.router.navigate(['admin']);
          this.loginService.setToken(data.token)
        },
        error: () => {
          this.message.error(this.translateTexts?.login.errors.notLog)
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getTranslate():void {
    this.translate.get('form').subscribe(data => {
      this.translateTexts = data;
    })
  }
}
