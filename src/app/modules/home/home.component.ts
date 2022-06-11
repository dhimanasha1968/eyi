import { Component, OnInit } from '@angular/core';
import { HomeInfo, HomeSectionInfo } from './models';

@Component({
  selector: 'eyi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  homeInfo: HomeInfo[] = [
    {
      icon: './assets/images/dummy_image.jpg',
      title: 'Discover Possible',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      icon: './assets/images/dummy_image.jpg',
      title: 'People Matter',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      icon: './assets/images/dummy_image.jpg',
      title: 'Feeling Good',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden'
    }
  ];
  latestTrends: HomeSectionInfo = {
    title: 'Latest Yoga Trends',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
  }
  spiritualGuide: HomeSectionInfo = {
    title: 'Your Spiritual Guide',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    categories: [
      {label: 'All', value: 'all'},
      {label: 'Hatha', value: 'hatha'},
      {label: 'Pilates', value: 'pilates'},
      {label: 'Yoga', value: 'yoga'}
    ],
    images: [
      {path: './assets/images/dummy_image.jpg', title: 'Exercise', category: 'hatha'},
      {path: './assets/images/dummy_image.jpg', title: 'Habbit', category: 'pilates'},
      {path: './assets/images/dummy_image.jpg', title: 'Yoga Pose', category: 'hatha'},
      {path: './assets/images/dummy_image.jpg', title: 'Learning', category: 'pilates'},
      {path: './assets/images/dummy_image.jpg', title: 'Time', category: 'yoga'},
      {path: './assets/images/dummy_image.jpg', title: 'Peace', category: 'yoga'},
      {path: './assets/images/dummy_image.jpg', title: 'Focus', category: 'hatha'},
      {path: './assets/images/dummy_image.jpg', title: 'Practice', category: 'yoga'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
