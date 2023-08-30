import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdcComponent } from './jdc.component';

describe('JdcComponent', () => {
  let component: JdcComponent;
  let fixture: ComponentFixture<JdcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdcComponent]
    });
    fixture = TestBed.createComponent(JdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
