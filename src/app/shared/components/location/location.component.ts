import { Component, Input, OnInit } from '@angular/core';
import { Locations } from '../../../core/models';

@Component({
  selector: 'eyi-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() location!: Locations;

  constructor() { }

  ngOnInit(): void {
  }

}
