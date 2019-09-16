import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovePage } from './love.page';

describe('LovePage', () => {
  let component: LovePage;
  let fixture: ComponentFixture<LovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
