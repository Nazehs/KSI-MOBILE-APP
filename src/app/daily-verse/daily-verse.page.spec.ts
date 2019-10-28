import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVersePage } from './daily-verse.page';

describe('DailyVersePage', () => {
  let component: DailyVersePage;
  let fixture: ComponentFixture<DailyVersePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyVersePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyVersePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
