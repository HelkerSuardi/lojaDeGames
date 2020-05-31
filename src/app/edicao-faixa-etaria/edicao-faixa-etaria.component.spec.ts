import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoFaixaEtariaComponent } from './edicao-faixa-etaria.component';

describe('EdicaoFaixaEtariaComponent', () => {
  let component: EdicaoFaixaEtariaComponent;
  let fixture: ComponentFixture<EdicaoFaixaEtariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoFaixaEtariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoFaixaEtariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
