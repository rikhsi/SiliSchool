import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})

export class FooterComponent implements OnInit {
  schoolNumber!: number;
  schoolPhone!: string;
  schoolLocation!: string;
  email!: string;
  youTube!: string;
  instagram!: string;
  locationLink!: string;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.schoolNumber = this.mainService.schoolNumber;
    this.schoolPhone = this.mainService.schoolPhone;
    this.email = this.mainService.email;
    this.locationLink = this.mainService.locationLink;
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
        case 3: {
          window.open(this.locationLink, "_blank")
        }
      }
    }, 300);
  }

  scroll():void{
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 300);
  }
}
