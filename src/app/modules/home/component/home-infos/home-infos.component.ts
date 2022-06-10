import { Component, Input, OnInit } from '@angular/core';
import { HomeInfo } from '../../models';

@Component({
  selector: 'eyi-home-infos',
  templateUrl: './home-infos.component.html',
  styleUrls: ['./home-infos.component.scss']
})
export class HomeInfosComponent implements OnInit {
  @Input() info!: HomeInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
