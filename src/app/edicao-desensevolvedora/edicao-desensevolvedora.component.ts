import { Component, OnInit, ViewChild } from '@angular/core';
import { Desenvolvedora } from '../models/desenvolvedora.models';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { DesensevolvedorasService } from '../services/desensevolvedoras.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-desensevolvedora',
  templateUrl: './edicao-desensevolvedora.component.html',
  styleUrls: ['./edicao-desensevolvedora.component.scss']
})
export class EdicaoDesensevolvedoraComponent implements OnInit {

  desensevolvedora: Desenvolvedora;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private desensevolvedoraService: DesensevolvedorasService,
    private activedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.desensevolvedora = await this.desensevolvedoraService.get(id);

    this.formulario.patchValue(this.desensevolvedora);

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
