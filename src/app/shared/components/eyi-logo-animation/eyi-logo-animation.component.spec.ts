import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyiLogoAnimationComponent } from './eyi-logo-animation.component';

describe('EyiLogoAnimationComponent', () => {
  let component: EyiLogoAnimationComponent;
  let fixture: ComponentFixture<EyiLogoAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyiLogoAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyiLogoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
