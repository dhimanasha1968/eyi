import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionImagesComponent } from './home-section-images.component';

describe('HomeSectionImagesComponent', () => {
  let component: HomeSectionImagesComponent;
  let fixture: ComponentFixture<HomeSectionImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
