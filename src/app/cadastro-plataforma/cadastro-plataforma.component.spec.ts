import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPlataformaComponent } from './cadastro-plataforma.component';

describe('CadastroPlataformaComponent', () => {
  let component: CadastroPlataformaComponent;
  let fixture: ComponentFixture<CadastroPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
