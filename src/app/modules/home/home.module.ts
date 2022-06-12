import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { HomeInfosComponent } from './component/home-infos/home-infos.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeSectionsComponent } from './component/home-sections/home-sections.component';
import { HomeSectionImagesComponent } from './component/home-section-images/home-section-images.component';
import { HomeDescWithStatsComponent } from './component/home-desc-with-stats/home-desc-with-stats.component';
import { HomeDescWithImgComponent } from './component/home-desc-with-img/home-desc-with-img.component';
import { HomeTweetsComponent } from './component/home-tweets/home-tweets.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeInfosComponent,
    HomeSectionsComponent,
    HomeSectionImagesComponent,
    HomeDescWithStatsComponent,
    HomeDescWithImgComponent,
    HomeTweetsComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    SharedModule,
    NgbProgressbarModule
  ],
  exports: [
    HomeComponent,
    HomeInfosComponent,
    HomeSectionsComponent,
    HomeSectionImagesComponent,
    HomeDescWithStatsComponent,
    HomeDescWithImgComponent
  ]
})
export class HomeModule { }
