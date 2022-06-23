import { Component, OnInit } from '@angular/core';
import { StratergyInfo, HomeSectionInfo, UserTweets, SignUpInfo, YogaStatsDesc, ImageDetailsDescription } from '../../core/models';

@Component({
  selector: 'eyi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3, 4].map((n) => `./assets/images/Carousel_${n}.JPG`);
  homeInfo: StratergyInfo[] = [
    {
      icon: './assets/images/dummy_image.JPG',
      title: 'STARTERS, MOVERS & FLYERS',
      description: 'Everest Yoga deepens yoga knowledge by creating a bridge between your practice & needs. We categorize learners as starters, movers & flyers and train according to the needs.'
    },
    {
      icon: './assets/images/Carousel_1.JPG',
      title: 'UTHENTIC TRADITIONAL & MODERN',
      description: 'Everest Yoga is an amalgamation of “Authentic Traditional Yoga” & “Modern Yoga”, inclined towards creating physical fitness, mental balance and spiritual elevation. (image of asana in traditional dress)'
    },
    {
      icon: './assets/images/Carousel_2.JPG',
      title: 'ONLINE & ONSITE',
      description: 'We strive to touch maximum lives. Age & location are no bars. Our services are available onsite as well as online.'
    }
  ];
  chooseClass: HomeSectionInfo = {
    title: 'CHOOSE FROM OUR COURSES',
    description: 'Create your career journey with us. On a professional level, you can specialize in any one or more of the courses.',
    carouselItems: [
      {
        items: [
          {path: './assets/images/Carousel_1.JPG', title: 'RAJ YOGA', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/dummy_image.JPG', title: 'HATHA YOGA', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/Carousel_2.JPG', title: 'ASHTANGA YOGA', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/Carousel_1.JPG', title: 'PROP YOGA', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' }
        ]
      },
      {
        items: [
          {path: './assets/images/dummy_image.JPG', title: 'PRENATAL YOGA COURSE', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/Carousel_2.JPG', title: 'ADVANCE ASANAS COURSE', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/Carousel_1.JPG', title: 'MULTISTYLE YOGA COURSE', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' },
          {path: './assets/images/Carousel_1.JPG', title: 'PROFESSIONAL YOGA TEACHER TRAINING', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', socialInfo: 'Spirituality' }
        ]
      }
    ]
  };
  spiritualGuide: HomeSectionInfo = {
    title: 'Deepen your yoga knowledge with Everest Yoga',
    description: ' Our Mission - “To create a Healthy & Happy World through Yogic Practices.”',
    categories: [
      {label: 'Adaptive & Efficient', value: 'adaptiveEfficient'},
      {label: 'Situational Awareness', value: 'situationalAwareness'},
      {label: 'Career Centered Courses', value: 'careerCenteredCourses'},
      {label: 'Heal & Feel', value: 'healFeal'}
    ],
    images: [
      {path: './assets/images/Carousel_2.JPG', title: 'THERAPEUTIC YOGA, MEDITATION & SHATKARMA CLASSES (ONLINE & ONSITE)', category: 'healFeal', label: 'Heal & Feel'},
      {path: './assets/images/dummy_image.JPG', title: 'PROFESSIONAL YOGA TEACHER TRAINING  (ONLINE & ONSITE)', category: 'careerCenteredCourses', label: 'Career Centered Courses'},
      {path: './assets/images/Carousel_2.JPG', title: 'GROUP YOGA CLASSES (ONLINE & ONSITE)', category: 'situationalAwareness',label: 'Situational Awareness'},
      {path: './assets/images/Carousel_1.JPG', title: 'PROFESSIONAL YOGA TEACHER TRAINING  (ONLINE & ONSITE)', category: 'careerCenteredCourses', label: 'Career Centered Courses'},
      {path: './assets/images/dummy_image.JPG', title: 'GROUP YOGA CLASSES (ONLINE & ONSITE)', category: 'situationalAwareness', label: 'Situational Awareness'},
      {path: './assets/images/Carousel_2.JPG', title: 'KID\'S YOGA CLASSES (ONLINE & ONSITE)', category: 'adaptiveEfficient', label: 'Adaptive & Efficient'},
      {path: './assets/images/dummy_image.JPG', title: 'THERAPEUTIC YOGA, MEDITATION & SHATKARMA CLASSES (ONLINE & ONSITE)', category: 'healFeal', label: 'Heal & Feel'},
      {path: './assets/images/Carousel_1.JPG', title: 'KID\'S YOGA CLASSES (ONLINE & ONSITE)', category: 'adaptiveEfficient', label: 'Adaptive & Efficient'}
    ],
    hoverMode: true
  };
  latestTrends: HomeSectionInfo = {
    title: 'Latest Yoga Trends',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    images: [
      {path: './assets/images/dummy_image.JPG', title: 'YOGA RETREATS & ADVENTURE CAMPS', description: 'There are many variations of passages of Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_1.JPG', title: 'CORPORATE YOGA PROGRAMS', description: 'There are many variations of passages of  Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_2.JPG', title: 'PHYSIO YOGA', description: 'There are many variations of passages of  Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_3.JPG', title: 'ARTISTIC, RHYTHMIC, PYRAMIDS, TRIO', description: 'There are many variations of passages of Lorem have suffered alteration in some form'}
    ],
    hoverMode: false,
    gutterSize: 10,
    columnSize: 3
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
