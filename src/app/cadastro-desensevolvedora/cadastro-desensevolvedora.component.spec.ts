import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDesensevolvedoraComponent } from './cadastro-desensevolvedora.component';

describe('CadastroDesensevolvedoraComponent', () => {
  let component: CadastroDesensevolvedoraComponent;
  let fixture: ComponentFixture<CadastroDesensevolvedoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDesensevolvedoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDesensevolvedoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
