import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { HomeTweets } from '../../models';

@Component({
  selector: 'eyi-home-tweets',
  templateUrl: './home-tweets.component.html',
  styleUrls: ['./home-tweets.component.scss']
})
export class HomeTweetsComponent implements OnInit {
  @ViewChild('carousel') carousel!: NgbCarousel;
  @Input() tweets!: HomeTweets[];
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.carousel.pause();
  }

}
