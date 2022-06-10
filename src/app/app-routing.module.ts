import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { EventsComponent } from './modules/events/events.component';
import { FaqComponent } from './modules/faq/faq.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { HomeComponent } from './modules/home/home.component';
import { YogaCoursesComponent } from './modules/yoga-courses/yoga-courses.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'events', component: EventsComponent},
  { path: 'yoga-courses', component: YogaCoursesComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'faq', component: FaqComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
