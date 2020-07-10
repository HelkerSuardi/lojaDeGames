import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { GenerosService } from '../services/generos.service';
import { JogosService } from '../services/jogos.service';
import { Genero } from '../models/genero.model';
import { Observable } from 'rxjs';
import { Jogo } from '../models/jogo.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { DesensevolvedorasService } from '../services/desensevolvedoras.service';
import { PlataformasService } from '../services/plataformas.service';
import { Desenvolvedora } from '../models/desenvolvedora.model';
import { Plataforma } from '../models/plataforma.model';
import { CustomValidators } from '../validators/custom-validators';

@Component({
    selector: 'app-cadastro-jogo',
    templateUrl: './cadastro-jogo.component.html',
    styleUrls: ['./cadastro-jogo.component.scss']
})
export class CadastroJogoComponent implements OnInit {

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

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private plataformasService: PlataformasService,
        private generosService: GenerosService,
        private desensevolvedorasService: DesensevolvedorasService,
        private jogosService: JogosService,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.plataformas = this.plataformasService.getObservable();
        this.generos = this.generosService.getObservable();
        this.desensevolvedoras = this.desensevolvedorasService.getObservable();
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novoJogo = this.formulario.value as Jogo;

        const jogo = await this.jogosService.add(novoJogo);

        console.log('Uma nova jogo foi salva ----------------------');
        console.log(jogo);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Nova jogo cadastrada com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
