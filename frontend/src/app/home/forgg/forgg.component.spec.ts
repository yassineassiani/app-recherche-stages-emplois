import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForggComponent } from './forgg.component';

describe('ForggComponent', () => {
  let component: ForggComponent;
  let fixture: ComponentFixture<ForggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForggComponent]
    });
    fixture = TestBed.createComponent(ForggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
