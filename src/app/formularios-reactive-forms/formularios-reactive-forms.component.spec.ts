import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosReactiveFormsComponent } from './formularios-reactive-forms.component';

describe('FormulariosReactiveFormsComponent', () => {
  let component: FormulariosReactiveFormsComponent;
  let fixture: ComponentFixture<FormulariosReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
