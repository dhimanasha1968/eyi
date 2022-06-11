import { Component, Input, OnInit } from '@angular/core';
import { YogaStatsDesc } from '../../models';

@Component({
  selector: 'eyi-home-desc-with-stats',
  templateUrl: './home-desc-with-stats.component.html',
  styleUrls: ['./home-desc-with-stats.component.scss']
})
export class HomeDescWithStatsComponent implements OnInit {
  @Input() description!: YogaStatsDesc;

  constructor() { }

  ngOnInit(): void {
  }

}
