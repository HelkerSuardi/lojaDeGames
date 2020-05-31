import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { DesensevolvedorasService } from '../services/desensevolvedoras.service';
import { Desenvolvedora } from '../models/desenvolvedora.models';

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
    private desensevolvedoraService: DesensevolvedorasService
  ) { }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const desensevolvedora = this.formulario.value as Desenvolvedora;
    const desensevolvedoraRetorno = await this.desensevolvedoraService.add(desensevolvedora);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
