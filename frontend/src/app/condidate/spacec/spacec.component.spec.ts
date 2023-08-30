import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacecComponent } from './spacec.component';

describe('SpacecComponent', () => {
  let component: SpacecComponent;
  let fixture: ComponentFixture<SpacecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecComponent]
    });
    fixture = TestBed.createComponent(SpacecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
