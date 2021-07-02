import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex15Component } from './ex15.component';

describe('Ex15Component', () => {
  let component: Ex15Component;
  let fixture: ComponentFixture<Ex15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
