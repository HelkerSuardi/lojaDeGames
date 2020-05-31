import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Plataforma } from '../models/plataforma.models';
import { PlataformasService } from '../services/plataformas.service';

@Component({
  selector: 'app-edicao-plataforma',
  templateUrl: './edicao-plataforma.component.html',
  styleUrls: ['./edicao-plataforma.component.scss']
})
export class EdicaoPlataformaComponent implements OnInit {

  plataforma: Plataforma;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private plataformaService: PlataformasService,
    private activedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.plataforma = await this.plataformaService.get(id);

    this.formulario.patchValue(this.plataforma);

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
