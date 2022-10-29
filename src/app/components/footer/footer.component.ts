import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sili-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  newOrder!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.newOrder = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      phone: [null, [Validators.required]],
      mail: [null, [Validators.email, Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  submitForm():void{

  }

}
