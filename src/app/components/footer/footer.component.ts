import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'sili-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  newOrder!: FormGroup;
  schoolNumber!: number;
  schoolPhone!: string;
  schoolLocation!: string;
  youTube!: string;
  instagram!: string;

  constructor(private fb: FormBuilder, private mainService: MainService) { 
    this.newOrder = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      phone: [null, [Validators.required]],
      mail: [null, [Validators.email, Validators.required]],
    });
  }

  ngOnInit(): void {
    this.schoolNumber = this.mainService.schoolNumber;
    this.schoolPhone = this.mainService.schoolPhone;
    this.schoolLocation = this.mainService.schoolLocation;
    this.youTube = this.mainService.youTube;
    this.instagram = this.mainService.instagram;
  }

  submitForm(e:Event):void{
    if (this.newOrder.valid) {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_PUBLIC_KEY')
      .then(() => {
        this.newOrder.reset();
      }, (error) => {
        console.log(error.text);
      });
    } else {
      Object.values(this.newOrder.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  openMedia(id: number):void {
    setTimeout(() => {
      switch(id){
        case 1: {
          window.open(this.instagram, "_blank");
          break
        }
        case 2: {
          window.open(this.youTube, "_blank");
          break
        }
      }
    }, 300);
  }
}
