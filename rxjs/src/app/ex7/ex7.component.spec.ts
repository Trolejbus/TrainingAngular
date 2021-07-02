import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7Component } from './ex7.component';

describe('Ex7Component', () => {
  let component: Ex7Component;
  let fixture: ComponentFixture<Ex7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
