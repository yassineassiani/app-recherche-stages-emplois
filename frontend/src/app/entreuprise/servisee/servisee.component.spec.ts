import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiseeComponent } from './servisee.component';

describe('ServiseeComponent', () => {
  let component: ServiseeComponent;
  let fixture: ComponentFixture<ServiseeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiseeComponent]
    });
    fixture = TestBed.createComponent(ServiseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
