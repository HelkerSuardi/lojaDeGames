import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { PlataformasService } from '../services/plataformas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Plataforma } from '../models/plataforma.model';

@Component({
    selector: 'app-cadastro-plataforma',
    templateUrl: './cadastro-plataforma.component.html',
    styleUrls: ['./cadastro-plataforma.component.scss']
})
export class CadastroPlataformaComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private plataformasService: PlataformasService,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    ngOnInit(): void {
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novaPlataforma = this.formulario.value as Plataforma;

        const plataforma = await this.plataformasService.add(novaPlataforma);

        console.log('Um novo plataforma foi salvo ----------------------');
        console.log(plataforma);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Novo plataforma cadastrado com sucesso!');

    }

    voltar() {
        this.location.back();
    }


}
