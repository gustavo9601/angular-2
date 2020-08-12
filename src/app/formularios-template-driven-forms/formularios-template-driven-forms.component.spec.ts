import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosTemplateDrivenFormsComponent } from './formularios-template-driven-forms.component';

describe('FormulariosTemplateDrivenFormsComponent', () => {
  let component: FormulariosTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<FormulariosTemplateDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosTemplateDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
