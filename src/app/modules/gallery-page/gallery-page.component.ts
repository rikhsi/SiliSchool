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
  pageSize: number = 6;
  isLoading: boolean = true;
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
    setTimeout(() => {
      this.getData();
      this.isLoading = !this.isLoading;
    }, 2000);
  }

  getData():void{
    // this.gallery = this.galleryService.galleries;
    // this.paginatedList = this.galleryService.galleries;
  }

  loadMore():void{
    this.isLoading = true
    setTimeout(() => {
      // this.paginatedList = this.paginatedList.concat(this.galleryService.galleries);
      this.gallery = [...this.paginatedList];
      this.isLoading = false
    }, 2000);
  }
}
