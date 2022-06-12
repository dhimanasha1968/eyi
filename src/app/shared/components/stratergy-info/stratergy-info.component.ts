import { Component, Input, OnInit } from '@angular/core';
import { StratergyInfo } from '../../../core/models';

@Component({
  selector: 'eyi-stratergy-info',
  templateUrl: './stratergy-info.component.html',
  styleUrls: ['./stratergy-info.component.scss']
})
export class StratergyInfoComponent implements OnInit {
  @Input() info!: StratergyInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
