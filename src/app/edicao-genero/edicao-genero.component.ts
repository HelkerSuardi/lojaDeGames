import { Component, OnInit, ViewChild } from '@angular/core';
import { Genero } from '../models/genero.models';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { GenerosService } from '../services/generos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-genero',
  templateUrl: './edicao-genero.component.html',
  styleUrls: ['./edicao-genero.component.scss']
})
export class EdicaoGeneroComponent implements OnInit {

  genero: Genero;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private generoService: GenerosService,
    private activedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.genero = await this.generoService.get(id);

    this.formulario.patchValue(this.genero);

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
