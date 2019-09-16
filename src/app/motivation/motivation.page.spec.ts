import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationPage } from './motivation.page';

describe('MotivationPage', () => {
  let component: MotivationPage;
  let fixture: ComponentFixture<MotivationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
