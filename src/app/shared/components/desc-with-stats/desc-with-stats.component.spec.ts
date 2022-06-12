import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescWithStatsComponent } from './desc-with-stats.component';

describe('DescWithStatsComponent', () => {
  let component: DescWithStatsComponent;
  let fixture: ComponentFixture<DescWithStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescWithStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescWithStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
