import { Component, HostListener, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { HeaderContent, NavItems } from './models';

@Component({
  selector: 'eyi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  companyName = 'Everest Yoga Institute';
  navItems: NavItems[] = [
    {
      path: '/home',
      title: 'Home'
    },
    {
      path: '/about',
      title: 'About Us',
      subMenu: [
        { path: '/about?cat=teachers', title: 'Amazing Teachers'},
        { path: '/about?cat=heads', title: 'Our Center Heads'}
      ],
      isExpanded: false
    },
    {
      path: '/events',
      title: 'Our Events'
    },
    {
      path: '/yoga-courses',
      title: 'Yoga Courses',
      subMenu: [
        { path: '/yoga-courses', title: 'Raj Yoga'},
        { path: '/yoga-courses', title: 'Hatha Yoga'},
        { path: '/yoga-courses', title: 'Ashtanga Yoga'},
        { path: '/yoga-courses', title: 'Prop Yoga'},
        { path: '/yoga-courses', title: 'Prenatal Yoga'},
        { path: '/yoga-courses', title: 'Advance Asanas'},
        { path: '/yoga-courses', title: 'Multistyle Yoga'},
        { path: '/yoga-courses', title: 'Professional Yoga Teacher Training'}
      ],
      isExpanded: false
    },
    {
      path: '/gallery',
      title: 'Gallery'
    },
    {
      path: '/faq',
      title: 'Faqs'
    }
  ];
  isResponsiveMenuExpanded = false;
  headerContent: HeaderContent = {
    sideDrawerTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    sideDrawerImages: [
      './assets/images/dummy_image.JPG',
      './assets/images/dummy_image.JPG',
      './assets/images/dummy_image.JPG'
    ],
    latestNews: [
      {
        icon: './assets/images/dummy_image.JPG',
        title: 'Work Hard',
        time: 'November 25, 2020'
      },
      {
        icon: './assets/images/dummy_image.JPG',
        title: 'Be Awesome Today!',
        time: 'November 20, 2020'
      },
      {
        icon: './assets/images/dummy_image.JPG',
        title: 'Set Goals. Reach.',
        time: 'November 12, 2022'
      }
    ]
  };
  isScrolled = false;
  @HostListener("window:scroll", [])
  onScroll(): void {
    if (window.scrollY === 0) {
      this.isScrolled = false;
    } else {
      if (!this.isScrolled) {
        this.isScrolled = true;
      }
    }
  }

  constructor(private offcanvasService: NgbOffcanvas, private route: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  openSideDrawer(content: TemplateRef<any>): void {
    this.offcanvasService.open(content, { position: 'end' });
  }

  toggleResponsiveDrawer(): void {
    this.isResponsiveMenuExpanded = !this.isResponsiveMenuExpanded;
  }

  changeRoute(route: string): void {
    this.route.navigateByUrl(route);
    this.isResponsiveMenuExpanded = false;
  }

  onOpenSubMenu(nav: NavItems): void {
    nav.isExpanded = !nav.isExpanded;
  }
}
