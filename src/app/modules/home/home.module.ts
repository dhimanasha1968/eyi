import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { HomeInfosComponent } from './component/home-infos/home-infos.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeInfosComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
