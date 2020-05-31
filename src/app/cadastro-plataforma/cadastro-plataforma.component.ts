import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { PlataformasService } from '../services/plataformas.service';
import { Plataforma } from '../models/plataforma.models';

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
    private plataformaService: PlataformasService
  ) { }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const plataforma = this.formulario.value as Plataforma;
    const plataformaRetorno = await this.plataformaService.add(plataforma);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
