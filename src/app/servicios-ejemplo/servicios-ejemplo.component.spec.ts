import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEjemploComponent } from './servicios-ejemplo.component';

describe('ServiciosEjemploComponent', () => {
  let component: ServiciosEjemploComponent;
  let fixture: ComponentFixture<ServiciosEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosEjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
