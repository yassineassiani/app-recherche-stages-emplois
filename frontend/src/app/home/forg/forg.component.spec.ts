import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgComponent } from './forg.component';

describe('ForgComponent', () => {
  let component: ForgComponent;
  let fixture: ComponentFixture<ForgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgComponent]
    });
    fixture = TestBed.createComponent(ForgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
