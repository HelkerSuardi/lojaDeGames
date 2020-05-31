import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFaixaEtariaComponent } from './cadastro-faixa-etaria.component';

describe('CadastroFaixaEtariaComponent', () => {
  let component: CadastroFaixaEtariaComponent;
  let fixture: ComponentFixture<CadastroFaixaEtariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFaixaEtariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFaixaEtariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
