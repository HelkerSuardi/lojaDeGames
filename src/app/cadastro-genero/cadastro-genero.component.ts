import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { GenerosService } from '../services/generos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Genero } from '../models/genero.model';

@Component({
    selector: 'app-cadastro-genero',
    templateUrl: './cadastro-genero.component.html',
    styleUrls: ['./cadastro-genero.component.scss']
})
export class CadastroGeneroComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private generosService: GenerosService,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    ngOnInit(): void { }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novoGenero = this.formulario.value as Genero;

        const genero = await this.generosService.add(novoGenero);

        console.log('Um novo genero foi salvo ----------------------');
        console.log(genero);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Novo genero cadastrado com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
