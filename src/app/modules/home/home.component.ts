import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { StratergyInfo, HomeSectionInfo, UserTweets, SignUpInfo, YogaStatsDesc, ImageDetailsDescription } from '../../core/models';

@Component({
  selector: 'eyi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mission = 'Our Mission - "To create a Healthy & Happy World through Yogic Practices."';
  images = [1, 2, 3, 4].map((n) => `./assets/images/Slider_${n}.jpg`);
  homeInfo: StratergyInfo[] = [
    {
      icon: './assets/images/dummy_image.JPG',
      title: 'STARTERS, MOVERS & FLYERS',
      description: 'Everest Yoga deepens yoga knowledge by creating a bridge between your practice & needs. We categorize learners as starters, movers & flyers and train according to the needs.'
    },
    {
      icon: './assets/images/Carousel_1.JPG',
      title: 'AUTHENTIC TRADITIONAL & MODERN',
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
    description: 'Minimum Age to join the courses: 12 years',
    subDescription1: 'Location: No bar. We are Onsite & Online',
    images: [
      {path: './assets/images/Carousel_1.JPG', title: 'RAJ YOGA', socialInfo: 'Spirituality' },
      {path: './assets/images/dummy_image.JPG', title: 'HATHA YOGA', socialInfo: 'Spirituality' },
      {path: './assets/images/Carousel_2.JPG', title: 'ASHTANGA YOGA', socialInfo: 'Spirituality' },
      {path: './assets/images/Carousel_1.JPG', title: 'PROP YOGA', socialInfo: 'Spirituality' },
      {path: './assets/images/dummy_image.JPG', title: 'PRENATAL YOGA COURSE', socialInfo: 'Spirituality' },
      {path: './assets/images/Carousel_2.JPG', title: 'ADVANCE ASANAS COURSE', socialInfo: 'Spirituality' },
      {path: './assets/images/Carousel_1.JPG', title: 'MULTISTYLE YOGA COURSE', socialInfo: 'Spirituality' },
      {path: './assets/images/Carousel_1.JPG', title: 'PROFESSIONAL YOGA TEACHER TRAINING', socialInfo: 'Spirituality' }
    ],
    hoverMode: false,
    marginGutterSize: 10,
    columnSize: 3
  };
  spiritualGuide: HomeSectionInfo = {
    title: 'Deepen your yoga knowledge with Everest Yoga',
    description: 'Age & Location - No Bars',
    subDescription1: 'We have something for all age groups.',
    subDescription2: 'You can join us ONSITE or ONLINE from the comforts of your home.',
    categories: [
      {label: 'All', value: 'all'},
      {label: 'Adaptive & Efficient', value: 'adaptiveEfficient'},
      {label: 'Situational Awareness', value: 'situationalAwareness'},
      {label: 'Career Centered Courses', value: 'careerCenteredCourses'},
      {label: 'Heal & Feel', value: 'healFeal'}
    ],
    images: [
      {path: './assets/images/gallery-1.JPG', title: 'THERAPEUTIC YOGA (ONLINE & ONSITE)', category: 'healFeal', label: 'Heal & Feel'},
      {path: './assets/images/gallery-2.JPG', title: 'PROFESSIONAL YOGA TEACHER TRAINING (ONLINE & ONSITE)', category: 'careerCenteredCourses', label: 'Career Centered Courses'},
      {path: './assets/images/gallery-1.JPG', title: 'GROUP YOGA CLASSES (ONLINE & ONSITE)', category: 'situationalAwareness',label: 'Situational Awareness'},
      {path: './assets/images/gallery-2.JPG', title: 'PROFESSIONAL YOGA TEACHER TRAINING (ONLINE & ONSITE)', category: 'careerCenteredCourses', label: 'Career Centered Courses'},
      {path: './assets/images/gallery-1.JPG', title: 'SHATKARMA CLASSES (ONLINE & ONSITE)', category: 'situationalAwareness', label: 'Situational Awareness'},
      {path: './assets/images/gallery-2.JPG', title: 'KID\'S YOGA CLASSES (ONLINE & ONSITE)', category: 'adaptiveEfficient', label: 'Adaptive & Efficient'},
      {path: './assets/images/gallery-1.JPG', title: 'MEDITATION CLASSES (ONLINE & ONSITE)', category: 'healFeal', label: 'Heal & Feel'},
      {path: './assets/images/gallery-2.JPG', title: 'KID\'S YOGA CLASSES (ONLINE & ONSITE)', category: 'adaptiveEfficient', label: 'Adaptive & Efficient'}
    ],
    hoverMode: true
  };
  latestTrends: HomeSectionInfo = {
    title: 'OUR LATEST YOGA TRENDS',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    images: [
      {path: './assets/images/dummy_image.JPG', title: 'YOGA RETREATS & ADVENTURE CAMPS', description: 'There are many variations of passages of Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_1.JPG', title: 'CORPORATE YOGA PROGRAMS', description: 'There are many variations of passages of  Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_2.JPG', title: 'YOGA CHAMPIONSHIPS', description: 'There are many variations of passages of  Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_3.JPG', title: 'ARTISTIC & RHYTHMIC YOGA', description: 'There are many variations of passages of Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_1.JPG', title: 'PYRAMIDS & TRIO', description: 'There are many variations of passages of Lorem have suffered alteration in some form'},
      {path: './assets/images/Carousel_2.JPG', title: 'PHYSIO YOGA', description: 'There are many variations of passages of Lorem have suffered alteration in some form'}
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
  };


  sliderOpacity = {
    first: 0,
    second: 0,
    third: 0,
    forth: 0
  };

  constructor() { }

  ngOnInit(): void { }

  onLoadImage(idx: number): void {
    this.setOpacity(idx, 1);
  }

  onSlideChange(evt: NgbSlideEvent): void {
    const prevIdx = evt.prev.split('ngb-slide-')[1];
    this.setOpacity(Number(prevIdx), 0);
    const currIdx = evt.current.split('ngb-slide-')[1];
    this.setOpacity(Number(currIdx), 1);
  }


  private setOpacity(idx: number, opacity: number): void {
    switch(idx) {
      case 0:
        this.sliderOpacity.first = opacity;
        break;
      case 1:
        this.sliderOpacity.second = opacity;
        break;
      case 2:
        this.sliderOpacity.third = opacity;
        break;
      case 3:
        this.sliderOpacity.forth = opacity;
        break;
    }
  }

}
