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
    {id: 1,headingTitle: 'ASANAS', headingDescription: '', title: 'ASANAS', description: '<p>We teach traditional yogasanas (Raj Yoga, Hatha Yoga, Ashtanga) as well as modern forms of yoga which are taught at level 1, 2, 3, 4 & 5. These levels are based on beginner, intermediate & advanced level of practice. Everest\'s self created series of asanas based on seven spinal movements are worth learning. </p><p>Hot Yoga, Yin Yoga, Restorative Yoga, Athletic Yoga, Rhythmic Yoga, Artistic Yoga ........and many more forms are taught. </p><p>Yoga with a variety of props makes our training courses unique.</p>', items: [], image: './assets/images/yoga-courses/ASANAS.JPG'},
    {id: 2,headingTitle: 'PRANAYAMA', headingDescription: '', title: 'PRANAYAMA', description: '<p>This module covers - </p><p>Theory of Pranayama</p><p>Breathing Techniques</p><p>Various types of Pranayama for beginner, intermediate & advanced level practice.</p>', items: [], image: './assets/images/yoga-courses/pranayam.JPG'},
    {id: 3,headingTitle: 'MUDRA, BANDHA, DRISHTI', headingDescription: '', title: 'MUDRA, BANDHA, DRISHTI', description: '', items: [], image: './assets/images/yoga-courses/DRISHTI.JPG'},
    {id: 4,headingTitle: 'SHATKARMAS', headingDescription: '', title: 'SHATKARMAS', description: '<p>Cleansing of the body is primary in yogic practice. </p><p>Therefore we teach - Objectives, Methods & Precautions of Detoxification, Jal Neti, Rubber Neti, Shankprakshalan, Kunjal, Kapal Bhati,Tratak etc. </p>', items: [], image: './assets/images/yoga-courses/SHATKARMA.JPG'},
    {id: 5,headingTitle: 'YOGIC HUMANITIES', headingDescription: '', title: 'YOGIC HUMANITIES', description: '<p>This module is devoted to yogic philosophy which gives in depth knowledge of types of yoga schools. An introduction to Patanjali Sutras is foundational towards becoming a yoga teacher. Tridosha, Pancha Prana, Yogic Ethics, Koshas, Chakras & Kundalini ....and many more aspects are covered.</p>', items: [], image: './assets/images/yoga-courses/ASANAS_1.JPG'},
    {id: 6,headingTitle: 'MEDITATION', headingDescription: '', title: 'MEDITATION', description: '<p>We teach scientific aspects of meditation and engage the student in classroom practice of a variety of meditations such as - Yoga Nidra, Chakra Meditation, Soham & Silent Meditation etc.</p>', items: [], image: './assets/images/yoga-courses/MEDITATION.JPG'},
    {id: 7,headingTitle: 'ANATOMY & PHYSIOLOGY', headingDescription: '', title: 'ANATOMY & PHYSIOLOGY', description: '<p>Anatomy - the study of structure & framework of the human body.</p><p>Physiology - the study of organ systems & how they function in coordination. This module is theoretical and enables the yoga teacher to connect the knowledge of yoga to the body. </p>', items: [], image: './assets/images/yoga-courses/mudra.JPG'},
    {id: 8,headingTitle: 'PROFESSIONAL SKILLS', headingDescription: '', title: 'PROFESSIONAL SKILLS', description: '<p>Employability Skills, Student Teacher Relationship, Lesson Planning, Business Aspects of Yoga, Class & Student Management etc are some key features of this module.</p>', items: [], image: './assets/images/yoga-courses/PROFESSIONALSKILLS.JPG'},
    {id: 9,headingTitle: 'PRACTICUM', headingDescription: '', title: 'PRACTICUM', description: '<p>Practicum is devoted to the practical display of knowledge, understanding, application, skills and experiences across the whole syllabus.</p>', items: [], image: './assets/images/yoga-courses/PRACTICUM.JPG'},
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
