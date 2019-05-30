import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEvenementPage } from './ajouter-evenement.page';

describe('AjouterEvenementPage', () => {
  let component: AjouterEvenementPage;
  let fixture: ComponentFixture<AjouterEvenementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEvenementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEvenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
