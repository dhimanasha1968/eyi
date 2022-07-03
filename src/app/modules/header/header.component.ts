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
  navItems: NavItems[] = [
    {
      path: '/home',
      title: 'Home'
    },
    {
      path: '/about',
      title: 'About Us'
    },
    {
      path: '/events',
      title: 'Our Events'
    },
    {
      path: '/yoga-courses',
      title: 'Yoga Courses',
      subMenu: [
        { path: '/yoga-courses', title: 'Course 1'},
        { path: '/yoga-courses', title: 'Course 2'}
      ]
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
  toggleSubMenu = false;
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
    this.route.navigate([route]);
    this.isResponsiveMenuExpanded = false;
  }

  onOpenSubMenu(): void {
    this.toggleSubMenu = !this.toggleSubMenu;
  }
}
