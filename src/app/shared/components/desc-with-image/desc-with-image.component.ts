import { Component, Input, OnInit } from '@angular/core';
import { ImageDetailsDescription } from '../../../core/models';

@Component({
  selector: 'eyi-desc-with-image',
  templateUrl: './desc-with-image.component.html',
  styleUrls: ['./desc-with-image.component.scss']
})
export class DescWithImageComponent implements OnInit {
  @Input() info!: ImageDetailsDescription;

  constructor() { }

  ngOnInit(): void {
  }

}
