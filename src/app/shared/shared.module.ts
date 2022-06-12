import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoAnimationComponent } from './components/logo-animation/logo-animation.component';
import { LocationComponent } from './components/location/location.component';



@NgModule({
  declarations: [
    LogoAnimationComponent,
    LocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoAnimationComponent,
    LocationComponent
  ]
})
export class SharedModule { }
