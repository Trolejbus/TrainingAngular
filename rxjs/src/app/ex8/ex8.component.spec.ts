import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8Component } from './ex8.component';

describe('Ex8Component', () => {
  let component: Ex8Component;
  let fixture: ComponentFixture<Ex8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
