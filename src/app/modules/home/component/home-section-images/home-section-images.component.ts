import { Component, Input, OnInit } from '@angular/core';
import { HomeSectionInfoImages } from '../../models';

@Component({
  selector: 'eyi-home-section-images',
  templateUrl: './home-section-images.component.html',
  styleUrls: ['./home-section-images.component.scss']
})
export class HomeSectionImagesComponent implements OnInit {
  @Input() images!: HomeSectionInfoImages[];

  constructor() { }

  ngOnInit(): void {
  }

}
