import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AboutComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbCarouselModule
  ],
  exports: [
    AboutComponent,
    UsersListComponent
  ]
})
export class AboutModule { }
