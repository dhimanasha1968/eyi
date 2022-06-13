import { Component, Input, OnInit } from '@angular/core';
import { EventsInfo } from '../../../../core/models';

@Component({
  selector: 'eyi-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {
  @Input() event!: EventsInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
