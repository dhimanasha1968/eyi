import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { AboutSectionInfo } from '../../../../core/models';

@Component({
  selector: 'eyi-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @ViewChild('carousel') carousel!: NgbCarousel;
  @Input() aboutSectionInfo!: AboutSectionInfo;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.carousel.pause();
  }

}
