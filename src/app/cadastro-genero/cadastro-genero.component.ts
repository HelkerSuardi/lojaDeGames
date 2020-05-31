import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { GenerosService } from '../services/generos.service';
import { Genero } from '../models/genero.models';

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
    private generoService: GenerosService
  ) { }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const genero = this.formulario.value as Genero;
    const generoRetorno = await this.generoService.add(genero);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
