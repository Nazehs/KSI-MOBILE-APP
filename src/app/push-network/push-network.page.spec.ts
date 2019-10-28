import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNetworkPage } from './push-network.page';

describe('PushNetworkPage', () => {
  let component: PushNetworkPage;
  let fixture: ComponentFixture<PushNetworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNetworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNetworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
