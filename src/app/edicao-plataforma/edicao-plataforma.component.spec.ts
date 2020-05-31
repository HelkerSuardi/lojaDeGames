import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPlataformaComponent } from './edicao-plataforma.component';

describe('EdicaoPlataformaComponent', () => {
  let component: EdicaoPlataformaComponent;
  let fixture: ComponentFixture<EdicaoPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
