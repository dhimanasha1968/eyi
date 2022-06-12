import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeSectionsComponent } from './component/home-sections/home-sections.component';
import { HomeSectionImagesComponent } from './component/home-section-images/home-section-images.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSectionsComponent,
    HomeSectionImagesComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    HomeSectionsComponent,
    HomeSectionImagesComponent,
    SignUpComponent
  ]
})
export class HomeModule { }
