import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWordsPage } from './daily-words.page';

describe('DailyWordsPage', () => {
  let component: DailyWordsPage;
  let fixture: ComponentFixture<DailyWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
