import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratergyInfoComponent } from './stratergy-info.component';

describe('StratergyInfoComponent', () => {
  let component: StratergyInfoComponent;
  let fixture: ComponentFixture<StratergyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StratergyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StratergyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
