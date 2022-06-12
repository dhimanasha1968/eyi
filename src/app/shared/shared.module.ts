import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoAnimationComponent } from './components/logo-animation/logo-animation.component';
import { LocationComponent } from './components/location/location.component';
import { StratergyInfoComponent } from './components/stratergy-info/stratergy-info.component';
import { BannerWithCaptionComponent } from './components/banner-with-caption/banner-with-caption.component';
import { DescWithImageComponent } from './components/desc-with-image/desc-with-image.component';
import { DescWithStatsComponent } from './components/desc-with-stats/desc-with-stats.component';
import { UserTweetsComponent } from './components/user-tweets/user-tweets.component';

@NgModule({
  declarations: [
    LogoAnimationComponent,
    LocationComponent,
    StratergyInfoComponent,
    BannerWithCaptionComponent,
    DescWithImageComponent,
    DescWithStatsComponent,
    UserTweetsComponent
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule,
    NgbCarouselModule
  ],
  exports: [
    LogoAnimationComponent,
    LocationComponent,
    StratergyInfoComponent,
    BannerWithCaptionComponent,
    DescWithImageComponent,
    DescWithStatsComponent,
    UserTweetsComponent
  ]
})
export class SharedModule { }
