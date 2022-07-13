import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AboutSectionInfo, BannerImage, StratergyInfo, UserTweets, YogaStatsDesc } from '../../core/models';
import { AboutCategory } from './enums';

@Component({
  selector: 'eyi-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  title = 'WHY EVEREST?';
  aboutUsBanner: BannerImage = {
    image: './assets/images/Carousel_3.JPG',
    title: 'WHY EVEREST?',
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

  headsInfo: AboutSectionInfo = {
    title: 'OUR CENTRE HEADS',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    carouselItems: [
      {
        items: [
          {name: 'DR GUNEET MONGA', description: 'Udaipur, Rajasthan, India', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Centre Head', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/GUNEET.jpg', education: ['B.Sc.', 'B.P.T', 'PGDYE', 'M.Sc. Yoga', 'MBA', 'NET', 'Ph.D.', 'eRYT 500 HRS'], backDescription: 'Dr. Guneet is a Yogacharya and Physiotherapist. She is effectively conducting YTTC. Her expertise in yoga and therapy sets her apart. '},
          {name: 'BHUPINDER SINGH', description: 'Patiala, Punjab, India', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Centre Head', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/BHUPINDER.jpg', education: ['Post graduate in Yoga'], backDescription: 'An international level referee, national level yoga player & coach. He teaches yoga, specifically to young children so as to dwell in them the spirit of empowerment. His effectiveness reflects in his students. He is also the VP of Yoga Sports Association, Punjab & Joint Sec at Yoga Society of Punjab.'},
          {name: 'SUNITHA S S', description: 'Kerala, India', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Centre Head', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/SUNITHA.jpg', education: ['Certified Yoga Teacher'], backDescription: 'Naturally very flexible, Sunitha S S, teaches to reap not only physical aspects of yoga but to inculcate mental benefits and spiritual awareness. She believes in identifying the power that this mind-body-spirit connection can bring. An Internationally Certified Yoga Teacher, Sunitha S S is the face of Everest in Kerala.'},
          {name: 'SHIVAM SHARMA', description: 'Bareilly, UP, India', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Centre Head', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/SHIVAM.png', education: [], backDescription: 'Shivam Sharma is teaching students at domestic & international levels and guiding them successfully through YTTC. He teaches hundreds of yoga lovers & yoga teachers daily. The classes vary for beginners, intermediates & advanced practitioners. Lessons focus on techniques to relax core muscles & build strength to perform a variety of asanas with ease & grace.'}
        ]
      }
    ]
  };
  usersInfo: AboutSectionInfo = {
    title: 'OUR FACILITATORS',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    carouselItems: [
      {
        items: [
          {name: 'YOGI SANJEEV TYAGI', description: 'Multistyle Yoga Teacher , Hatha Yoga & Raja Yoga Teacher, International Yoga Referee', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Founder & MD', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/SANJEEV_TYAGI.JPG', education: ['Master of Yoga from Gurukul Kangri University', 'Master of Physical Education', 'eRYT 200hrs, eRYT 500hrs, YACEP'], backDescription: 'His classes are focused on variations and techniques. He is the originator of Everest Multi-Style Yoga to meet the needs of each and every participant in the class. Incorporating physical education techniques like general & specific warm up, cool down, CPR, first aid techniques, and many more aspects, enhances the performance of his classes.'},
          {name: 'KAVITA TYAGI', description: 'Therapeutic Yoga Teacher, Guide & Counsellor; Anatomy & Physiology Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Founder & MD', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/Kavita_Tyagi.jpg',  education: ['Master of Human Physiology, Biochemistry & Endocrinology', 'Master of Yogic Science', 'Bachelor of Education (B.Ed.)', '200 hrs. & 500 hrs. TTC', 'Founder & MD- Everest Yoga Institute & Everest Sports Academy, Ludhiana, Punjab, India.'], backDescription: 'Kavita Tyagi, being an anatomy and physiology teacher, provides students an in-depth and anatomical understanding of Asanas & Pranayama. She skillfully incorporates her anatomical knowledge into her classes to increase awareness of the body. She uses advanced technology to make the topics simpler and more interesting. Taking follow up of her classes while doing practices is very important for her as she believes that yoga is 95 % practical.'},
          {name: 'RUCHI GUPTA', description: 'Manager at Everest Yoga Institute, Anatomy & Physiology Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Manager', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/RUCHI_GUPTA.jpg',  education: ['Master of Yogic Science', 'Bachelor of Science (Biology)', 'Bachelor of Education (B.Ed.)', '500 hrs. TTC'], backDescription: 'She aims to promote peace, gratitude and self love by speaking with authenticity and spreading calm energy. She coordinates  the planning, controlling, implementation of activities and ensures a safe, secure environment.'},
          {name: 'Shivam Malik', description: 'Ashtanga Vinyasa Yoga Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/SHIVAM_MALIK.JPG',  education: ['Internationally Certified Professional Yoga Teacher', 'Bachelor of Yoga', 'International & National Gold Medalist in Traditional & Artistic Yoga Championships'], backDescription: 'Shivam is a devoted yogi and has done professional courses in Ashtanga Yoga & Vinyasa Yoga. He believes yoga is accessible to all people regardless of culture, religion or age. He is a dedicated teacher who stays connected with his students. His classrooms offer modifications for starters, movers & flyers.His classes are focused on variations and techniques. He is the originator of Everest Multi-Style Yoga to meet the needs of each and every participant in the class. Incorporating physical education techniques like general & specific warm up, cool down, CPR, first aid techniques, and many more aspects, enhances the performance of his classes.'}
        ]
      },
      {
        items: [
          {name: 'PRADEEP NAUTIYAL', description: 'Raja & Hatha Yoga Teacher; Yogic Philosophy Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/PRADEEP_NAUTIYAL.JPG', education: ['Post Graduate in Yoga', 'Internationally Certified Professional Yoga Teacher'], backDescription: 'Pradeep is committed to instructing students on the "Art and Power of Yoga" as a means to connect to their individual ‘self’. He is an expert in teaching various forms of yoga postures and positions to students from basic to advanced level, identifying the health condition and teaching proper breathing technique. Pradeep is a well versed scholar on the subject of Vedic Mantra Sastra & Yogic Philosophy. His yogic philosophy classrooms are transcendental and interesting.'},
          {name: 'PALAK SHARMA', description: 'Multistyle Yoga Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/Palak_sharma.JPG', education: ['Bachelor of Yoga', 'Internationally Certified Professional Yoga Teacher (YA USA)'], backDescription: 'Palak has completed 500 hrs. of TTC in Multistyle Yoga . She is knowledgeable and adaptable. Sequencing the classes thoughtfully and intelligently is her strength. She skillfully teaches a wide range of student ages, abilities and experience levels. Palak builds great relationships as she genuinely wants the best for her participants and see them succeed.'},
          {name: 'PRIYA RAWAT', description: 'Advanced Level Yoga Teacher, Ashtanga Yoga Teacher, Artistic & Acrobatic Yoga Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/PRIYA.JPG', education: ['Master of Business Administration', 'Master of Yoga', 'Internationally Certified Yoga Teacher (YA USA)'], backDescription: 'As a yoga teacher, Priya teaches in a manner that respects diversity. She focuses on alignment, inspirational and motivational language. She herself is an international level gold medalist in artistic yoga & acrobatic yoga. Her smile & openness towards learning are her strengths.'},
          {name: 'KRITIKA SHARMA', description: 'Advanced Level Yoga Trainer, Astanga Yoga Teacher, Acro Yoga Teacher, Kids Yoga Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/KRITIKA.JPG', education: ['Bachelor in Yoga', 'Internationally Certified Yoga Teacher (YA USA)', 'International Level Yoga Champion'], backDescription: 'Kritika found yoga at a very early age. She practices the combination of yoga and acrobatics i.e. ACROYOGA. Her practice of asanas is at an advanced level, which she has attained through commitment & discipline. She is an international level yoga champion. She is a yoga enthusiast and uses props and tools to teach postures with variations, for beginner, intermediate & advanced practitioners.'}
        ]
      },
      {
        items: [
          {name: 'HARLEEN KAUR', description: 'Multistyle Yoga Teacher, Kids Yoga Teacher, State Level Bhangra Champion', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/HARLEEN.JPG', education: ['Master in Business Administration- Marketing & HR', 'Internationally Certified Multistyle Yoga Teacher '], backDescription: 'Harleen\'s yoga classrooms, online & offline, are well organized. She is professionally skilled in yogic ethics which makes her teaching applicable for all. Dash of bhangra (folk dance of Punjab) by Harleen fuels energy into her students. Her kids yoga classroom is full of variations to make kids comfortable at a beginner level and later she introduces challenges.'},
          {name: 'SHIV KUMAR', description: 'Multistyle Yoga Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/shiv_kumar.JPG', education: ['Master in Yoga', 'Internationally Certified Multistyle Yoga Teacher'], backDescription: 'Shiv entered into yoga teacher training with the desire to give back to his community the benefits of calming the mind through breath and movement, from simple to complex. Moving through a series of strength building and balancing poses, back bends and core work and inversions, students get personal attention and hands on assistance in his sessions.'},
          {name: 'DEV KUMAR', description: 'Multistyle Yoga Teacher, Artistic Yoga Teacher, Zumba Instructor', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/DEV.JPG', education: ['Bachelor of Yoga', 'Internationally Certified Multistyle Yoga Teacher', 'Zumba Instructor'], backDescription: 'As a Multi- Style and Artistic yoga teacher, Dev has immense potential and creativity. He enjoys, motivates and inspires others to improve wellness and connect to their inner self to explore their potential and heal through the power and art of yoga. He pours energy through zumba & dance and offers a multifaceted classroom. He is effective in Pyramid formations.'},
          {name: 'ATUL RATURI', description: 'Advanced Level Yoga Trainer, Astanga Yoga Teacher, Acro Yoga Teacher, Kids Yoga Vedic Sahitya & Mantra Shastri, Raj Yoga Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/ATUL.JPG', education: ['Bachelor in Sahitya Sanskrit & Vedic Paath (Shukla Yajurveda)', 'Master in Yogic Science'], backDescription: 'Atul is an absolute blend of a proficient Yoga Practitioner. Atul has mastery over vedic mantras and conducting hawans. He connects yogic postures , breathing patterns , mantra chanting and their scientific influences on the human body in his practice.'}
        ]
      },
      {
        items: [
          {name: 'JAGJOT SINGH', description: '', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Marketing Manager', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/JAGJOT.jpg', education: [], backDescription: 'Jagjot is associated with Everest as a marketing manager He has unique networking ability. He is commercially aware and takes care of marketing resources and activities.'},
          {name: 'SUPREET KAUR', description: 'Multistyle Yoga Teacher', email: 'test@test.com', mobile: '+1-565-565-9999', job: 'Teacher', facebook: 'http://facebook.com', linkedIn: 'https://linkedin.com', twitter: 'https://twitter.com', image: './assets/images/teachers/SUPREET_KAUR.JPG', education: ['Persuing Bachelor of Yoga', 'Internationally Certified Multistyle Yoga Teacher'], backDescription: 'Supreet  is completely reliant as a yoga teacher. Her classes are a combination of various styles of yoga to meet the needs of students.'}
        ]
      }
    ]
  };
  happyCustomers: UserTweets[] = [
    {name: 'John Snow', title: 'Business Man', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
    {name: 'Arya Stark', title: 'Doctor', message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {name: 'Jaime Baratheon', title: 'Business Man', message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  ];
  aboutCategory = AboutCategory;
  category: AboutCategory = AboutCategory.TEACHER;
  private routeParamsSubscription!: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeParamsSubscription = this.activeRoute.queryParams.subscribe((params: any) => {
      this.category = params['cat'];
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
  }

}
