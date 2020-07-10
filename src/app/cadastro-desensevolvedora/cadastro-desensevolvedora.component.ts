import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { DesensevolvedorasService } from '../services/desensevolvedoras.service';
import { Desenvolvedora } from '../models/desenvolvedora.model';

@Component({
    selector: 'app-cadastro-desensevolvedora',
    templateUrl: './cadastro-desensevolvedora.component.html',
    styleUrls: ['./cadastro-desensevolvedora.component.scss']
})
export class CadastroDesensevolvedoraComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private desensevolvedorasService: DesensevolvedorasService,
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

        const novaDesensevolvedora = this.formulario.value as Desenvolvedora;

        const tecnica = await this.desensevolvedorasService.add(novaDesensevolvedora);

        console.log('Uma nova tecnica foi salva ----------------------');
        console.log(tecnica);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

        this.snackBar.open('Nova tecnica cadastrada com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
