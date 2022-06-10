import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LatestNewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LatestNewsComponent
  ]
})
export class HeaderModule { }
