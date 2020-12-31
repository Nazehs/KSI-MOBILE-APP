import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrayerPage } from './edit-prayer.page';

describe('EditPrayerPage', () => {
  let component: EditPrayerPage;
  let fixture: ComponentFixture<EditPrayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
