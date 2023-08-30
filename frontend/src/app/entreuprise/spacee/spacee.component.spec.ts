import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceeComponent } from './spacee.component';

describe('SpaceeComponent', () => {
  let component: SpaceeComponent;
  let fixture: ComponentFixture<SpaceeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceeComponent]
    });
    fixture = TestBed.createComponent(SpaceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
