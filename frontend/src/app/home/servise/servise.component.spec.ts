import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiseComponent } from './servise.component';

describe('ServiseComponent', () => {
  let component: ServiseComponent;
  let fixture: ComponentFixture<ServiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiseComponent]
    });
    fixture = TestBed.createComponent(ServiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
