import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsignupPage } from './mainsignup.page';

describe('MainsignupPage', () => {
  let component: MainsignupPage;
  let fixture: ComponentFixture<MainsignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
