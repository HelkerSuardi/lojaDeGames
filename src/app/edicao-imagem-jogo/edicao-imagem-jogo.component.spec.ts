import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoImagemJogoComponent } from './edicao-imagem-jogo.component';

describe('EdicaoImagemJogoComponent', () => {
  let component: EdicaoImagemJogoComponent;
  let fixture: ComponentFixture<EdicaoImagemJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoImagemJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoImagemJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
