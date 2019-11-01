import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChatroomPage } from './create-chatroom.page';

describe('CreateChatroomPage', () => {
  let component: CreateChatroomPage;
  let fixture: ComponentFixture<CreateChatroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChatroomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChatroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
