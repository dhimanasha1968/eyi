import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { UserTweets } from '../../../core/models';

@Component({
  selector: 'eyi-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.scss']
})
export class UserTweetsComponent implements OnInit {
  @ViewChild('carousel') carousel!: NgbCarousel;
  @Input() tweets!: UserTweets[];
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.carousel.pause();
  }

}
