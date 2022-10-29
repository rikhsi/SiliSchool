import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  newOrder!: FormGroup;
  schoolNumber!: number;

  constructor(private fb: FormBuilder, private mainService: MainService) { 
    this.newOrder = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      phone: [null, [Validators.required]],
      mail: [null, [Validators.email, Validators.required]],
    });
  }

  ngOnInit(): void {
    this.schoolNumber = this.mainService.schoolNumber;
  }

  submitForm():void{
    if (this.newOrder.valid) {
      this.newOrder.reset();
    } else {
      Object.values(this.newOrder.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
