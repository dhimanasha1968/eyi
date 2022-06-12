import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDescWithImgComponent } from './home-desc-with-img.component';

describe('HomeDescWithImgComponent', () => {
  let component: HomeDescWithImgComponent;
  let fixture: ComponentFixture<HomeDescWithImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDescWithImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDescWithImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
