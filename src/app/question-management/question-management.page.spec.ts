import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionManagementPage } from './question-management.page';

describe('QuestionManagementPage', () => {
  let component: QuestionManagementPage;
  let fixture: ComponentFixture<QuestionManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
