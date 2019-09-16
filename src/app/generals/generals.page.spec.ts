import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralsPage } from './generals.page';

describe('GeneralsPage', () => {
  let component: GeneralsPage;
  let fixture: ComponentFixture<GeneralsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
