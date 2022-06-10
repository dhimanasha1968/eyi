import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaCoursesComponent } from './yoga-courses.component';

describe('YogaCoursesComponent', () => {
  let component: YogaCoursesComponent;
  let fixture: ComponentFixture<YogaCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
