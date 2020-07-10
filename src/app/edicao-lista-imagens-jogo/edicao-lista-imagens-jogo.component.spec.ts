import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoListaImagensJogoComponent } from './edicao-lista-imagens-jogo.component';

describe('EdicaoListaImagensJogoComponent', () => {
  let component: EdicaoListaImagensJogoComponent;
  let fixture: ComponentFixture<EdicaoListaImagensJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoListaImagensJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoListaImagensJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
