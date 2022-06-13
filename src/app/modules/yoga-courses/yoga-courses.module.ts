import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaCoursesComponent } from './yoga-courses.component';
import { SharedModule } from '../../shared';
import { YogaCoursesOfferedComponent } from './components/yoga-courses-offered/yoga-courses-offered.component';
import { YogaWorkflowComponent } from './components/yoga-workflow/yoga-workflow.component';

@NgModule({
  declarations: [
    YogaCoursesComponent,
    YogaCoursesOfferedComponent,
    YogaWorkflowComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    YogaCoursesComponent,
    YogaCoursesOfferedComponent,
    YogaWorkflowComponent
  ]
})
export class YogaCoursesModule { }
