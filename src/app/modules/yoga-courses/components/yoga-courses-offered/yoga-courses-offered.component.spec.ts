import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaCoursesOfferedComponent } from './yoga-courses-offered.component';

describe('YogaCoursesOfferedComponent', () => {
  let component: YogaCoursesOfferedComponent;
  let fixture: ComponentFixture<YogaCoursesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaCoursesOfferedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaCoursesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
