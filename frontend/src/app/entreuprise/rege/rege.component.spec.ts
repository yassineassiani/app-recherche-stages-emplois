import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegeComponent } from './rege.component';

describe('RegeComponent', () => {
  let component: RegeComponent;
  let fixture: ComponentFixture<RegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegeComponent]
    });
    fixture = TestBed.createComponent(RegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
