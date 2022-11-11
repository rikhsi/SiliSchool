import { Component, OnInit } from '@angular/core';
import { BreadCrump } from 'src/app/models/breadCrump';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'sili-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.less']
})
export class GalleryPageComponent implements OnInit {
  title: string = 'gallery.title';
  fallback:string = '../../../../assets/img/fallback.png';
  button: boolean = true;
  page: number = 0;
  pageSize: number = 6;
  isLoading!: boolean;
  gallery!: Gallery[];
  paginatedList!: Gallery[];
  breadCrump: BreadCrump[] = [
    {
      title: 'home.title',
      path: ''
    },
    {
      title: 'gallery.title',
      path: '/gallery'
    }
  ];

  constructor(private galleryService: GalleryService,private mainService: MainService) { }

  
  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.isLoading = true;
    this.galleryService.get(this.page).subscribe({
      next: data => {
        this.gallery = data.data;
        this.paginatedList = data.data;
        this.page = this.page + 1;
        this.isLoading = false;
      }
    })
  }

  loadMore():void{
    this.isLoading = true;
    this.galleryService.get(this.page).subscribe({
      next: data => {
        if(data.pages > this.page){
          this.paginatedList = this.paginatedList.concat(data.data);
          this.gallery = [...this.paginatedList];
        } else{
          this.paginatedList = this.paginatedList.concat(data.data);
          this.gallery = [...this.paginatedList];
          this.button = false;
        }
        this.page = this.page + 1;
        this.isLoading = false;
      }
    })
  }
}

