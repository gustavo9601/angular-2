import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEventosComponent } from './binding-eventos.component';

describe('BindingEventosComponent', () => {
  let component: BindingEventosComponent;
  let fixture: ComponentFixture<BindingEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
