import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoAnimationComponent } from './components/logo-animation/logo-animation.component';



@NgModule({
  declarations: [
    LogoAnimationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoAnimationComponent
  ]
})
export class SharedModule { }
