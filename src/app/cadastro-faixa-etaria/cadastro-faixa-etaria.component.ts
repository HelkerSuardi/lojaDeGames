import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { FaixasEtariasService } from '../services/faixas-etarias.service';
import { FaixaEtaria } from '../models/faixa-etaria.models';

@Component({
  selector: 'app-cadastro-faixa-etaria',
  templateUrl: './cadastro-faixa-etaria.component.html',
  styleUrls: ['./cadastro-faixa-etaria.component.scss']
})
export class CadastroFaixaEtariaComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private faixaEtariaService: FaixasEtariasService
  ) { }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const faixaEtaria = this.formulario.value as FaixaEtaria;
    const faixaEtariaRetorno = await this.faixaEtariaService.add(faixaEtaria);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
