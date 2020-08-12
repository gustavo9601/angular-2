import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContenidoComponent } from './template-contenido.component';

describe('TemplateContenidoComponent', () => {
  let component: TemplateContenidoComponent;
  let fixture: ComponentFixture<TemplateContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
