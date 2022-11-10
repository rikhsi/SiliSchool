import { Component, OnInit } from '@angular/core';
import { BreadCrump } from 'src/app/models/breadCrump';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'sili-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.less']
})
export class GalleryPageComponent implements OnInit {
  title: string = 'gallery.title';
  fallback:string = '../../../../assets/img/fallback.png';
  button: boolean = true;
  page: number = 1;
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

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getData(0);
  }

  getData(page:number):void{
    this.isLoading = true;
    this.galleryService.get(0).subscribe({
      next: data => {
        this.gallery = data;
        this.paginatedList = data;
        this.isLoading = false;
      }
    })
  }

  loadMore():void{
    this.page = this.page + 1;
    this.isLoading = true;
    this.galleryService.get(this.page).subscribe({
      next: data => {
        if(data.length === 0){
          this.button = false;
          this.isLoading = false;
        } else{
          this.paginatedList = this.paginatedList.concat(data);
          this.gallery = [...this.paginatedList];
          this.isLoading = false;
        }
      }
    })
  }
}
