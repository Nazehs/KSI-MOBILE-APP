import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatromListPage } from './chatrom-list.page';

describe('ChatromListPage', () => {
  let component: ChatromListPage;
  let fixture: ComponentFixture<ChatromListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatromListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatromListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
