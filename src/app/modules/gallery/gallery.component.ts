import { Component, OnInit } from '@angular/core';
import { BannerImage } from '../../core/models';

@Component({
  selector: 'eyi-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryBanner: BannerImage = {
    image: './assets/images/Carousel_1.JPG',
    title: 'Gallery',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  };
  galleryImages: string[] = ['./assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_3.JPG', './assets/images/Carousel_2.JPG', './assets/images/Carousel_1.JPG'];

  constructor() { }

  ngOnInit(): void {
  }

}
