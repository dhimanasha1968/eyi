import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { HomeInfosComponent } from './component/home-infos/home-infos.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeSectionsComponent } from './component/home-sections/home-sections.component';
import { HomeSectionImagesComponent } from './component/home-section-images/home-section-images.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeInfosComponent,
    HomeSectionsComponent,
    HomeSectionImagesComponent
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
