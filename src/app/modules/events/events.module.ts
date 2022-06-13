import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EventsComponent
  ]
})
export class EventsModule { }
