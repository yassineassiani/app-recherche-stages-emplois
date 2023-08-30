import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseComponent } from './jobse.component';

describe('JobseComponent', () => {
  let component: JobseComponent;
  let fixture: ComponentFixture<JobseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobseComponent]
    });
    fixture = TestBed.createComponent(JobseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
