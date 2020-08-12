import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildHijoComponent } from './viewchild-hijo.component';

describe('ViewchildHijoComponent', () => {
  let component: ViewchildHijoComponent;
  let fixture: ComponentFixture<ViewchildHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
