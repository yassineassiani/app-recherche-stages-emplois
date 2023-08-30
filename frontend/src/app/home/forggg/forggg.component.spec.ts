import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgggComponent } from './forggg.component';

describe('ForgggComponent', () => {
  let component: ForgggComponent;
  let fixture: ComponentFixture<ForgggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgggComponent]
    });
    fixture = TestBed.createComponent(ForgggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
