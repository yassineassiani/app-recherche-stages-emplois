import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdComponent } from './jd.component';

describe('JdComponent', () => {
  let component: JdComponent;
  let fixture: ComponentFixture<JdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdComponent]
    });
    fixture = TestBed.createComponent(JdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
