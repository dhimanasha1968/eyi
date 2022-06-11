import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDescWithStatsComponent } from './home-desc-with-stats.component';

describe('HomeDescWithStatsComponent', () => {
  let component: HomeDescWithStatsComponent;
  let fixture: ComponentFixture<HomeDescWithStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDescWithStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDescWithStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
