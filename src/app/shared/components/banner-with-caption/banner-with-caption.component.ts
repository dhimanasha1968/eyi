import { Component, Input, OnInit } from '@angular/core';
import { BannerImage } from '../../../core/models';

@Component({
  selector: 'eyi-banner-with-caption',
  templateUrl: './banner-with-caption.component.html',
  styleUrls: ['./banner-with-caption.component.scss']
})
export class BannerWithCaptionComponent implements OnInit {
  @Input() bannerInfo!: BannerImage;

  constructor() { }

  ngOnInit(): void {
  }

}
