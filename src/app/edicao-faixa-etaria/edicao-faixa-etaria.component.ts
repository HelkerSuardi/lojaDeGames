import { Component, OnInit, ViewChild } from '@angular/core';
import { FaixaEtaria } from '../models/faixa-etaria.models';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { FaixasEtariasService } from '../services/faixas-etarias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-faixa-etaria',
  templateUrl: './edicao-faixa-etaria.component.html',
  styleUrls: ['./edicao-faixa-etaria.component.scss']
})
export class EdicaoFaixaEtariaComponent implements OnInit {

  faixaEtaria: FaixaEtaria;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private faixaEtariaService: FaixasEtariasService,
    private activedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.faixaEtaria = await this.faixaEtariaService.get(id);

    this.formulario.patchValue(this.faixaEtaria);

  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    // const estilo = this.formulario.value as Estilo;
    // const estiloRetorno = await this.estilosService.add(estilo);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
