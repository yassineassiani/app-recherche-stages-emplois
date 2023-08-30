import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisecComponent } from './servisec.component';

describe('ServisecComponent', () => {
  let component: ServisecComponent;
  let fixture: ComponentFixture<ServisecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServisecComponent]
    });
    fixture = TestBed.createComponent(ServisecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
