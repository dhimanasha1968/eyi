import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTweetsComponent } from './home-tweets.component';

describe('HomeTweetsComponent', () => {
  let component: HomeTweetsComponent;
  let fixture: ComponentFixture<HomeTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
