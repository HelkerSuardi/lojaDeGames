import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CustomValidators } from '../validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { GenerosService } from '../services/generos.service';
import { JogosService } from '../services/jogos.service';
import { Genero } from '../models/genero.model';
import { Jogo } from '../models/jogo.model';
import { DesensevolvedorasService } from '../services/desensevolvedoras.service';
import { PlataformasService } from '../services/plataformas.service';
import { Desenvolvedora } from '../models/desenvolvedora.model';
import { Plataforma } from '../models/plataforma.model';

@Component({
    selector: 'app-edicao-jogo',
    templateUrl: './edicao-jogo.component.html',
    styleUrls: ['./edicao-jogo.component.scss']
})
export class EdicaoJogoComponent implements OnInit {

    idJogo: string;
    jogo: Jogo;

    plataformas: Observable<Plataforma[]>;
    generos: Observable<Genero[]>;
    desensevolvedoras: Observable<Desenvolvedora[]>;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        valor: ['', [Validators.required, CustomValidators.number]],
        idPlataforma: ['', Validators.required],
        idGenero: ['', Validators.required],
        idDesensevolvedora: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
        private plataformasService: PlataformasService,
        private generosService: GenerosService,
        private desensevolvedorasService: DesensevolvedorasService,
        private jogosService: JogosService,
        private snackBar: MatSnackBar,
        private location: Location,
        private activedRoute: ActivatedRoute,
    ) { }

    async ngOnInit() {

        this.formulario.disable();

        this.plataformas = this.plataformasService.getObservable();
        this.generos = this.generosService.getObservable();
        this.desensevolvedoras = this.desensevolvedorasService.getObservable();

        this.idJogo = this.activedRoute.snapshot.paramMap.get('id');
        this.jogo = await this.jogosService.get(this.idJogo);

        console.log(this.jogo);

        this.formulario.patchValue(this.jogo);

        this.formulario.enable();
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const jogoEditado = this.formulario.value as Jogo;

        const jogo = await this.jogosService.update(this.idJogo, jogoEditado);

        console.log('Um jogo foi editada -------------------------');
        console.log('Jogo:');
        console.log(this.jogo);
        console.log('Campos atualizados:');
        console.log(jogoEditado);

        Object.assign(this.jogo, jogoEditado);

        this.formulario.enable();

        this.snackBar.open('Jogo atualizada com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
