import { Component, Input, OnInit } from '@angular/core';
import { LatestNews } from '../../models';

@Component({
  selector: 'eyi-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  @Input() news!: LatestNews;

  constructor() { }

  ngOnInit(): void {
  }

}
