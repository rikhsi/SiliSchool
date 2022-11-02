import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'sili-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.less']
})
export class ConnectionPageComponent implements OnInit {
  order!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.order = this.fb.group({
      name: [null, [Validators.required,Validators.minLength(3)]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.email,Validators.required]],
      message: [null,[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.order.valid) {
      this.order.reset();
    } else {
      Object.values(this.order.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
