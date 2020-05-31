import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { Plataforma } from '../models/plataforma.models';
import { JogosService } from '../services/jogos.service';
import { PlataformasService } from '../services/plataformas.service';
import { Jogo } from '../models/jogo.models';
import { GenerosService } from '../services/generos.service';
import { FaixasEtariasService } from '../services/faixas-etarias.service';
import { DesensevolvedorasService } from '../services/desensevolvedoras.service';
import { Genero } from '../models/genero.models';
import { FaixaEtaria } from '../models/faixa-etaria.models';
import { Desenvolvedora } from '../models/desenvolvedora.models';

@Component({
  selector: 'app-cadastro-jogo',
  templateUrl: './cadastro-jogo.component.html',
  styleUrls: ['./cadastro-jogo.component.scss']
})
export class CadastroJogoComponent implements OnInit {

  plataformas: Observable<Plataforma[]>;
  generos: Observable<Genero[]>;
  faixasEtarias: Observable<FaixaEtaria[]>;
  desensevolvedoras: Observable<Desenvolvedora[]>;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    idPlataforma: ['', Validators.required],
    idGenero: ['', Validators.required],
    idFaixaEtaria: ['', Validators.required],
    idDesensevolvedora: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;


  constructor(
    private formBuilder: FormBuilder,
    private jogosService: JogosService,
    private plataformaService: PlataformasService,
    private generoService: GenerosService,
    private faixaEtariaService: FaixasEtariasService,
    private desensevolvedoraService: DesensevolvedorasService
  ) { }

  ngOnInit(): void {
    this.plataformas = this.plataformaService.getObservable();
    this.generos = this.generoService.getObservable();
    this.faixasEtarias = this.faixaEtariaService.getObservable();
    this.desensevolvedoras = this.desensevolvedoraService.getObservable();
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const novoJogo = this.formulario.value as Jogo;
    const jogoSalvo = await this.jogosService.add(novoJogo);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
