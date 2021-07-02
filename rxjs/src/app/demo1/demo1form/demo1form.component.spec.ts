import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1formComponent } from './demo1form.component';

describe('Demo1formComponent', () => {
  let component: Demo1formComponent;
  let fixture: ComponentFixture<Demo1formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo1formComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
