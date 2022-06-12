import { Component, Input, OnInit } from '@angular/core';
import { HomeSectionInfoImages } from '../../../../core/models';

@Component({
  selector: 'eyi-home-section-images',
  templateUrl: './home-section-images.component.html',
  styleUrls: ['./home-section-images.component.scss']
})
export class HomeSectionImagesComponent implements OnInit {
  @Input() images!: HomeSectionInfoImages[];
  @Input() hoverMode!: boolean;
  @Input() gutterSize: number = 0;
  @Input() marginGutterSize: number = 0;
  @Input() columnSize: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
