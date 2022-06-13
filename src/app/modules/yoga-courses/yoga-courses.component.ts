import { Component, OnInit } from '@angular/core';
import { BannerImage, StratergyInfo, YogaCoursesOffered, YogaStatsDesc, YogaWorkFlow } from '../../core/models';

@Component({
  selector: 'eyi-yoga-courses',
  templateUrl: './yoga-courses.component.html',
  styleUrls: ['./yoga-courses.component.scss']
})
export class YogaCoursesComponent implements OnInit {
  yogaBanner: BannerImage = {
    image: './assets/images/Carousel_3.JPG',
    title: 'Yoga Courses',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  };
  yogaStatergyInfo: StratergyInfo[] = [
    {
      icon: './assets/images/dummy_image.JPG',
      title: 'Discover Possible',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: './assets/images/Carousel_1.JPG',
      title: 'People Matter',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      icon: './assets/images/Carousel_2.JPG',
      title: 'What Feels Good',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected'
    },
    {
      icon: './assets/images/dummy_image.JPG',
      title: 'Having a Plan',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    }
  ];
  coursesOffered: YogaCoursesOffered[] = [
    {id: 1,headingTitle: 'Hatha yoga training', headingDescription: 'Moving Minds', title: 'Classical Yoga', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected', items: ['Test Item 1', 'Test Item 2', 'Test Item 3', 'Test Item 4'], image: './assets/images/dummy_image.JPG'},
    {id: 2,headingTitle: 'Meditation Guru Training', headingDescription: 'People Power', title: 'Meditation', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected', items: ['Test Item 1', 'Test Item 2', 'Test Item 3', 'Test Item 4'], image: './assets/images/Carousel_1.JPG'},
    {id: 3,headingTitle: 'Hatha yoga training', headingDescription: 'Moving Minds', title: 'Classical Yoga', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected', items: ['Test Item 1', 'Test Item 2', 'Test Item 3', 'Test Item 4'], image: './assets/images/dummy_image.JPG'},
    {id: 4,headingTitle: 'Meditation Guru Training', headingDescription: 'People Power', title: 'Meditation', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected', items: ['Test Item 1', 'Test Item 2', 'Test Item 3', 'Test Item 4'], image: './assets/images/Carousel_2.JPG'},
  ];
  yogaDescription: YogaStatsDesc = {
    title: 'Yoga enhances your life',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stats: [
      {label: 'Breathing', value: 65},
      {label: 'Metabolism', value: 90},
      {label: 'Flexibility', value: 80},
      {label: 'Toned Muscles', value: 50}
    ]
  };
  yogaWorkFlows: YogaWorkFlow = {
    workflows: [
      {title: 'Determination', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', image: './assets/images/dummy_image.JPG', leftSeparator: false, rightSeparator: true},
      {title: 'Self recognition', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', image: './assets/images/Carousel_1.JPG', leftSeparator: true, rightSeparator: true},
      {title: 'The Culture', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', image: './assets/images/Carousel_2.JPG', leftSeparator: true, rightSeparator: true},
      {title: 'Final Result', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', image: './assets/images/Carousel_3.JPG', leftSeparator: true, rightSeparator: false}
    ],
    title: 'Our Work Flow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
