import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotePage } from './create-note.page';

describe('CreateNotePage', () => {
  let component: CreateNotePage;
  let fixture: ComponentFixture<CreateNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
