import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmisPage } from './amis.page';

describe('AmisPage', () => {
  let component: AmisPage;
  let fixture: ComponentFixture<AmisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
