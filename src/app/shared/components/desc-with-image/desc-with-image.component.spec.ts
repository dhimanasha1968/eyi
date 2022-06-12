import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescWithImageComponent } from './desc-with-image.component';

describe('DescWithImageComponent', () => {
  let component: DescWithImageComponent;
  let fixture: ComponentFixture<DescWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescWithImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
