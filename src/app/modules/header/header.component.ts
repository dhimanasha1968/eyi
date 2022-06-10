import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavItems } from './models';

@Component({
  selector: 'eyi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
      title: 'Yoga Courses'
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

  constructor(private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
  }

  openSideDrawer(content: TemplateRef<any>): void {
    this.offcanvasService.open(content, { position: 'end' });
  }

  openResponsiveDrawer(): void {
    this.isResponsiveMenuExpanded = !this.isResponsiveMenuExpanded;
  }
}
