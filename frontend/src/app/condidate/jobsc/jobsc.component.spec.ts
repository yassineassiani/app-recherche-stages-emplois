import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobscComponent } from './jobsc.component';

describe('JobscComponent', () => {
  let component: JobscComponent;
  let fixture: ComponentFixture<JobscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobscComponent]
    });
    fixture = TestBed.createComponent(JobscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
