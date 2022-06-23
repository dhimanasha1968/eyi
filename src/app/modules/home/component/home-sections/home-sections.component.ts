import { Component, Input, OnInit } from '@angular/core';
import { HomeSectionInfo, HomeSectionInfoImages } from '../../../../core/models';

@Component({
  selector: 'eyi-home-sections',
  templateUrl: './home-sections.component.html',
  styleUrls: ['./home-sections.component.scss']
})
export class HomeSectionsComponent implements OnInit {
  @Input() homeSectionInfo!: HomeSectionInfo;

  images: HomeSectionInfoImages[] = [];

  constructor() { }

  ngOnInit(): void {
    this.images = this.homeSectionInfo.images!;
  }

  filterCategories(cat: string): void {
    this.images = cat === 'all' ? this.homeSectionInfo.images! : this.homeSectionInfo.images!.filter((img: HomeSectionInfoImages) => {
      return img.category === cat;
    });
  }
}
