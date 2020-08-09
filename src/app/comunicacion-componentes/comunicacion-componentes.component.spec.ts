import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionComponentesComponent } from './comunicacion-componentes.component';

describe('ComunicacionComponentesComponent', () => {
  let component: ComunicacionComponentesComponent;
  let fixture: ComponentFixture<ComunicacionComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
