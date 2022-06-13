import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaWorkflowComponent } from './yoga-workflow.component';

describe('YogaWorkflowComponent', () => {
  let component: YogaWorkflowComponent;
  let fixture: ComponentFixture<YogaWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
