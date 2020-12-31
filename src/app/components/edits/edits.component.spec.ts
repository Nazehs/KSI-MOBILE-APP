import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsComponent } from './edits.component';

describe('EditsComponent', () => {
  let component: EditsComponent;
  let fixture: ComponentFixture<EditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
