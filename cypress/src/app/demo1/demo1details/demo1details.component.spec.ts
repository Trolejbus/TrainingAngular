import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1detailsComponent } from './demo1details.component';

describe('Demo1detailsComponent', () => {
  let component: Demo1detailsComponent;
  let fixture: ComponentFixture<Demo1detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo1detailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
