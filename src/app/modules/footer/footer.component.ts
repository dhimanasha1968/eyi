import { Component, OnInit } from '@angular/core';
import { FooterDetails } from '../../core/models';

@Component({
  selector: 'eyi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerDetails: FooterDetails = {
    aboutUsTitle: 'About Us',
    aboutUsDescription: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself',
    subscribeTitle: 'Subscribe',
    subscribePlaceholder: 'Enter Your Email',
    tweetsTitle: 'Latest Tweets',
    tweets: [{msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,', link: 'https://test.com'}, {msg: 'ris nisi ut aliquip ex ea commodo consequat,', link: 'https://test.com'}],
    topPostsTitle: 'Top Posts',
    topPosts: [
      {title: 'Your Inspiration', msg: 'Lorem ipsum dolor sit amet, consectetur...', date: 'June 1, 2022'},
      {title: 'Your Inspiration', msg: 'Lorem ipsum dolor sit amet, consectetur...', date: 'June 18, 2022'}
    ],
    instagramTitle: 'Instagram',
    instaPics: ['./assets/images/dummy_image.JPG', './assets/images/Carousel_1.JPG', './assets/images/dummy_image.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_1.JPG', './assets/images/Carousel_2.JPG', './assets/images/dummy_image.JPG', './assets/images/Carousel_2.JPG']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
