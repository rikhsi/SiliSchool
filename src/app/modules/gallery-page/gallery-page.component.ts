import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'sili-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.less']
})
export class GalleryPageComponent implements OnInit {
  title: string = 'gallery.title'
  isLoading: boolean = true;
  gallery!: Gallery[];
  fallback:string = '../../../../assets/img/fallback.png';

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.gallery = this.galleryService.galleries;
      this.isLoading = false;
    }, 5000);
  
  }
}
