import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidateComponent } from './condidate.component';

describe('CondidateComponent', () => {
  let component: CondidateComponent;
  let fixture: ComponentFixture<CondidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondidateComponent]
    });
    fixture = TestBed.createComponent(CondidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
