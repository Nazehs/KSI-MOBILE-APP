import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordClipsPage } from './word-clips.page';

describe('WordClipsPage', () => {
  let component: WordClipsPage;
  let fixture: ComponentFixture<WordClipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordClipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordClipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
