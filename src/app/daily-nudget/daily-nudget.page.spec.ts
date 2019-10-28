import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyNudgetPage } from './daily-nudget.page';

describe('DailyNudgetPage', () => {
  let component: DailyNudgetPage;
  let fixture: ComponentFixture<DailyNudgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyNudgetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyNudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
