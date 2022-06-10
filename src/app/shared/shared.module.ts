import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyiLogoAnimationComponent } from './components/eyi-logo-animation/eyi-logo-animation.component';



@NgModule({
  declarations: [
    EyiLogoAnimationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EyiLogoAnimationComponent
  ]
})
export class SharedModule { }
