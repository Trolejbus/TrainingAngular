import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex14Component } from './ex14.component';

describe('Ex14Component', () => {
  let component: Ex14Component;
  let fixture: ComponentFixture<Ex14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
