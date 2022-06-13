import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { SharedModule } from '../../shared';
import { EventViewComponent } from './components/event-view/event-view.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EventsComponent,
    EventViewComponent
  ]
})
export class EventsModule { }
