import { Component, Input, OnInit } from '@angular/core';
import { YogaWellnessInformation } from '../../models';

@Component({
  selector: 'eyi-home-desc-with-img',
  templateUrl: './home-desc-with-img.component.html',
  styleUrls: ['./home-desc-with-img.component.scss']
})
export class HomeDescWithImgComponent implements OnInit {
  @Input() info!: YogaWellnessInformation;

  constructor() { }

  ngOnInit(): void {
  }

}
