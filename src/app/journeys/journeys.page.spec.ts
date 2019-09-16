import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneysPage } from './journeys.page';

describe('JourneysPage', () => {
  let component: JourneysPage;
  let fixture: ComponentFixture<JourneysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
