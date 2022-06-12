import { Component, Input, OnInit } from '@angular/core';
import { YogaStatsDesc } from '../../../core/models';

@Component({
  selector: 'eyi-desc-with-stats',
  templateUrl: './desc-with-stats.component.html',
  styleUrls: ['./desc-with-stats.component.scss']
})
export class DescWithStatsComponent implements OnInit {
  @Input() description!: YogaStatsDesc;
  @Input() customizedBackground!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
