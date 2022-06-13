import { Component, OnInit } from '@angular/core';
import { BannerImage, EventsInfo } from '../../core/models';

@Component({
  selector: 'eyi-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventsBanner: BannerImage = {
    image: './assets/images/Carousel_2.JPG',
    title: 'Yoga Events',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  };
  events: EventsInfo[] = [
    {
      date: '21st Apr',
      title: 'Nature Connection',
      dateTime: '2022/04/01 @ 9:30 AM - 2022/06/05 @ 6:30 PM',
      price: '$120',
      image: './assets/images/Carousel_1.JPG',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      eventDetails: {
        title: 'Event Details',
        date: '2022/04/01 @ 9:30 am - 2022/06/05 @ 6:30 pm',
        time: '9:30 am - 6:30 pm',
        venue: 'Wellness Studio',
        address: '826 Home Street',
        organizerName: 'A Studio',
        phone: '1-677-124-4421237',
        email: 'test@test.com'
      }
    },
    {
      date: '11th Apr',
      title: 'Nature Connection',
      dateTime: '2022/04/01 @ 9:30 AM - 2022/06/05 @ 6:30 PM',
      price: '$120',
      image: './assets/images/Carousel_1.JPG',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      eventDetails: {
        title: 'Event Details',
        date: '2022/04/01 @ 9:30 am - 2022/06/05 @ 6:30 pm',
        time: '9:30 am - 6:30 pm',
        venue: 'Wellness Studio',
        address: '826 Home Street',
        organizerName: 'A Studio',
        phone: '1-677-124-4421237',
        email: 'test@test.com'
      }
    },
    {
      date: '10th Apr',
      title: 'Nature Connection',
      dateTime: '2022/04/01 @ 9:30 AM - 2022/06/05 @ 6:30 PM',
      price: '$120',
      image: './assets/images/Carousel_1.JPG',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      eventDetails: {
        title: 'Event Details',
        date: '2022/04/01 @ 9:30 am - 2022/06/05 @ 6:30 pm',
        time: '9:30 am - 6:30 pm',
        venue: 'Wellness Studio',
        address: '826 Home Street',
        organizerName: 'A Studio',
        phone: '1-677-124-4421237',
        email: 'test@test.com'
      }
    },
    {
      date: '1st Apr',
      title: 'Nature Connection',
      dateTime: '2022/04/01 @ 9:30 AM - 2022/06/05 @ 6:30 PM',
      price: '$120',
      image: './assets/images/Carousel_1.JPG',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      eventDetails: {
        title: 'Event Details',
        date: '2022/04/01 @ 9:30 am - 2022/06/05 @ 6:30 pm',
        time: '9:30 am - 6:30 pm',
        venue: 'Wellness Studio',
        address: '826 Home Street',
        organizerName: 'A Studio',
        phone: '1-677-124-4421237',
        email: 'test@test.com'
      }
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
