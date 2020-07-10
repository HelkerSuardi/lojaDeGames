import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoJogoComponent } from './edicao-jogo.component';

describe('EdicaoProdutoComponent', () => {
    let component: EdicaoJogoComponent;
    let fixture: ComponentFixture<EdicaoJogoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EdicaoJogoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EdicaoJogoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
