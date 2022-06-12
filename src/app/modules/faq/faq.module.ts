import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './faq.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbAccordionModule
  ],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }
