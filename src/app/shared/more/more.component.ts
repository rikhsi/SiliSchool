import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sili-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.less']
})
export class MoreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  changePage():void{
    this.router.navigate(['/gallery'])
  }
}
