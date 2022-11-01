import { Component, OnInit } from '@angular/core';
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
  pageSize: number = 4;
  isLoading: boolean = true;
  gallery!: Gallery[];
  paginatedList!: Gallery[];

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.gallery = this.galleryService.galleries;
    setTimeout(() => {
      this.paginatedList = this.gallery.slice(0,4)
      this.isLoading = false;
    }, 1000);
  }

  loadPage(index: number):void{
    this.isLoading = true;
    const startIndex = (index-1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    if(endIndex > this.gallery.length) {
      endIndex = this.gallery.length
    }
    setTimeout(() => {
      this.paginatedList = this.gallery.slice(startIndex,endIndex);
      this.isLoading = false;
    }, 1000);
  }
}
