import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13Component } from './ex13.component';

describe('Ex13Component', () => {
  let component: Ex13Component;
  let fixture: ComponentFixture<Ex13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
