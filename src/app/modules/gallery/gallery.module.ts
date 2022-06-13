import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
