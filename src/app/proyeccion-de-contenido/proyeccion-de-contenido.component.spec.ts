import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeccionDeContenidoComponent } from './proyeccion-de-contenido.component';

describe('ProyeccionDeContenidoComponent', () => {
  let component: ProyeccionDeContenidoComponent;
  let fixture: ComponentFixture<ProyeccionDeContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyeccionDeContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyeccionDeContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
