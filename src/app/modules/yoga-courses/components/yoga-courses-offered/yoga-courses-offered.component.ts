import { Component, Input, OnInit } from '@angular/core';
import { YogaCoursesOffered } from '../../../../core/models';

@Component({
  selector: 'eyi-yoga-courses-offered',
  templateUrl: './yoga-courses-offered.component.html',
  styleUrls: ['./yoga-courses-offered.component.scss']
})
export class YogaCoursesOfferedComponent implements OnInit {
  @Input() courses!: YogaCoursesOffered[];
  selectedCourse!: YogaCoursesOffered;

  constructor() { }

  ngOnInit(): void {
    this.changeCourse(this.courses[0]);
  }

  changeCourse(course: YogaCoursesOffered): void {
    this.selectedCourse = course;
  }

}
