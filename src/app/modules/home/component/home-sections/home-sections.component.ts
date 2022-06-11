import { Component, Input, OnInit } from '@angular/core';
import { HomeSectionInfo } from '../../models';

@Component({
  selector: 'eyi-home-sections',
  templateUrl: './home-sections.component.html',
  styleUrls: ['./home-sections.component.scss']
})
export class HomeSectionsComponent implements OnInit {
  @Input() homeSectionInfo!: HomeSectionInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
