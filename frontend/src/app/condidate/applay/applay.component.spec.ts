import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplayComponent } from './applay.component';

describe('ApplayComponent', () => {
  let component: ApplayComponent;
  let fixture: ComponentFixture<ApplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplayComponent]
    });
    fixture = TestBed.createComponent(ApplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
