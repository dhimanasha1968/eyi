import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWithCaptionComponent } from './banner-with-caption.component';

describe('BannerWithCaptionComponent', () => {
  let component: BannerWithCaptionComponent;
  let fixture: ComponentFixture<BannerWithCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerWithCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWithCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
