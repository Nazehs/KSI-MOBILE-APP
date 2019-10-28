import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspireImpactPage } from './inspire-impact.page';

describe('InspireImpactPage', () => {
  let component: InspireImpactPage;
  let fixture: ComponentFixture<InspireImpactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireImpactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireImpactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
