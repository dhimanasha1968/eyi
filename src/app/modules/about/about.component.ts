import { Component, OnInit } from '@angular/core';
import { AboutSectionInfo, BannerImage, StratergyInfo, UserTweets, YogaStatsDesc } from '../../core/models';

@Component({
  selector: 'eyi-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutUsBanner: BannerImage = {
    image: './assets/images/Carousel_3.JPG',
    title: 'About Us',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  };
  aboutInfo: StratergyInfo[] = [
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
      title: 'What Feels Good',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden'
    }
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
  usersInfo: AboutSectionInfo = {
    title: 'Amazing Teachers',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    carouselItems: [
      {
        items: [
          {name: 'John Snow', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Senior Supervisor', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/dummy_image.JPG'},
          {name: 'Robb Stark', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Supervisor', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/Carousel_1.JPG'},
          {name: 'Arya Stark', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Lead', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/dummy_image.JPG'},
          {name: 'David Rawat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Director', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/Carousel_2.JPG'}
        ]
      },
      {
        items: [
          {name: 'Joseph Tribbiani', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Senior Supervisor', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/dummy_image.JPG'},
          {name: 'Ross Geller', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Senior Director', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/Carousel_1.JPG'},
          {name: 'Chandler Bing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Senior Vice President', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/Carousel_2.JPG'},
          {name: 'Monica Geller', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Senior Supervisor', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/dummy_image.JPG'}
        ]
      }
    ]
  };
  happyCustomers: UserTweets[] = [
    {name: 'John Snow', title: 'Business Man', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Arya Stark', title: 'Doctor', message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {name: 'Jaime Baratheon', title: 'Business Man', message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
