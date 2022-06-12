import { Component, OnInit } from '@angular/core';
import { StratergyInfo, HomeSectionInfo, UserTweets, SignUpInfo, YogaStatsDesc, ImageDetailsDescription } from '../../core/models';

@Component({
  selector: 'eyi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3].map((n) => `./assets/images/Carousel_${n}.JPG`);
  homeInfo: StratergyInfo[] = [
    {
      icon: './assets/images/dummy_image.JPG',
      title: 'Discover Possible',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      icon: './assets/images/Carousel_1.JPG',
      title: 'People Matter',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
      icon: './assets/images/Carousel_2.JPG',
      title: 'Feeling Good',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden'
    }
  ];
  latestTrends: HomeSectionInfo = {
    title: 'Latest Yoga Trends',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    carouselItems: [
      {
        items: [
          {path: './assets/images/Carousel_1.JPG', title: 'Discover Possible', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/dummy_image.JPG', title: 'Discover Possible', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/Carousel_2.JPG', title: 'Discover Possible', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' }
        ]
      },
      {
        items: [
          {path: './assets/images/dummy_image.JPG', title: 'Discover Possible', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/Carousel_2.JPG', title: 'Discover Possible', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/Carousel_1.JPG', title: 'Discover Possible', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' }
        ]
      }
    ]
  };
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
      {path: './assets/images/Carousel_2.JPG', title: 'Exercise', category: 'hatha'},
      {path: './assets/images/dummy_image.JPG', title: 'Habbit', category: 'pilates'},
      {path: './assets/images/Carousel_2.JPG', title: 'Yoga Pose', category: 'hatha'},
      {path: './assets/images/Carousel_1.JPG', title: 'Learning', category: 'pilates'},
      {path: './assets/images/dummy_image.JPG', title: 'Time', category: 'yoga'},
      {path: './assets/images/Carousel_2.JPG', title: 'Peace', category: 'yoga'},
      {path: './assets/images/dummy_image.JPG', title: 'Focus', category: 'hatha'},
      {path: './assets/images/Carousel_1.JPG', title: 'Practice', category: 'yoga'}
    ],
    hoverMode: true
  };
  chooseClass: HomeSectionInfo = {
    title: 'Choose The Class For You',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    images: [
      {path: './assets/images/dummy_image.JPG', title: 'Exercise', description: 'There are many variations of passages of Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_1.JPG', title: 'Habbit', description: 'There are many variations of passages of  Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_2.JPG', title: 'Yoga Pose', description: 'There are many variations of passages of  Lorem have suffered alteration in some form'}
    ],
    hoverMode: false,
    gutterSize: 10,
    columnSize: 4
  };
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
  wellnessInformation: ImageDetailsDescription = {
    image: './assets/images/dummy_image.JPG',
    title: 'Yoga enhances your life',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };
  happyCustomers: UserTweets[] = [
    {name: 'John Snow', title: 'Business Man', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Arya Stark', title: 'Doctor', message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {name: 'Jaime Baratheon', title: 'Business Man', message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  ];
  signUpClasses: HomeSectionInfo = {
    title: 'Sign up for our classes',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
  };
  signUpInfo: SignUpInfo = {
    title: 'Lets Connect!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    locations: [
      {city: 'New York', phone: '+1 656 656 5656', email: 'test@eyi.com', address: 'xyz street'},
      {city: 'London', phone: '+1 656 656 5656', email: 'test@eyi.com', address: 'xyz street'},
      {city: 'Cape Town', phone: '+1 656 656 5656', email: 'test@eyi.com', address: 'xyz street'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
