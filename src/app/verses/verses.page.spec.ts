import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesPage } from './verses.page';

describe('VersesPage', () => {
  let component: VersesPage;
  let fixture: ComponentFixture<VersesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
