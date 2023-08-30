import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdeComponent } from './jde.component';

describe('JdeComponent', () => {
  let component: JdeComponent;
  let fixture: ComponentFixture<JdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdeComponent]
    });
    fixture = TestBed.createComponent(JdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
