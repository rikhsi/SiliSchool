import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrump } from 'src/app/models/breadCrump';

@Component({
  selector: 'sili-bread-crump',
  templateUrl: './bread-crump.component.html',
  styleUrls: ['./bread-crump.component.less']
})
export class BreadCrumpComponent implements OnInit {
  @Input() breadCrump!:BreadCrump[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(path: string):void{
    setTimeout(() => {
      this.router.navigate([`${path}`])
    }, 300);
  }
}
