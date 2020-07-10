import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Jogo } from '../models/jogo.model'
import { Desenvolvedora } from '../models/desenvolvedora.model'
import { Plataforma } from '../models/plataforma.model'
import { Genero } from '../models/genero.model'

import { PlataformasService } from '../services/plataformas.service';
import { GenerosService } from '../services/generos.service';
import { DesensevolvedorasService } from '../services/desensevolvedoras.service';
import { JogosService } from '../services/jogos.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';

@Component({
    selector: 'app-jogos',
    templateUrl: './jogos.component.html',
    styleUrls: ['./jogos.component.scss']
})
export class JogosComponent implements OnInit {

    jogos: Observable<Jogo[]>;
    desensevolvedoras: Observable<Desenvolvedora[]>;
    plataformas: Observable<Plataforma[]>;
    generos: Observable<Genero[]>;
    usuario: Usuario;

    constructor(
        private router: Router,
        private jogosService: JogosService,
        private desensevolvedorasService: DesensevolvedorasService,
        private generosService: GenerosService,
        private plataformasService: PlataformasService,
        private usuariosService: UsuariosService
    ) { }

    async ngOnInit(): Promise<void> {

        this.usuario = await this.usuariosService.getUsuarioLogado();

        this.jogos = this.jogosService.getObservable();
        this.desensevolvedoras = this.desensevolvedorasService.getObservable();
        this.generos = this.generosService.getObservable();
        this.plataformas = this.plataformasService.getObservable();
    }

    usuarioAdmin(): boolean {

        if (this.usuario && this.usuario.permissao === 'admin') {
            return true;
        } else {
            return false;
        }
    }

}
