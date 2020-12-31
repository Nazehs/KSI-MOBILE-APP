import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickImagePage } from './pick-image.page';

describe('PickImagePage', () => {
  let component: PickImagePage;
  let fixture: ComponentFixture<PickImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
