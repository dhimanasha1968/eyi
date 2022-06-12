import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './modules/header/header.module';
import { HomeModule } from './modules/home/home.module';
import { FooterModule } from './modules/footer/footer.module';
import { AboutModule } from './modules/about/about.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { FaqModule } from './modules/faq/faq.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    HomeModule,
    FooterModule,
    AboutModule,
    GalleryModule,
    FaqModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
