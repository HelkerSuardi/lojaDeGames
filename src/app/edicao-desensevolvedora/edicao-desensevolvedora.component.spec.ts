import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoDesensevolvedoraComponent } from './edicao-desensevolvedora.component';

describe('EdicaoDesensevolvedoraComponent', () => {
  let component: EdicaoDesensevolvedoraComponent;
  let fixture: ComponentFixture<EdicaoDesensevolvedoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoDesensevolvedoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoDesensevolvedoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
