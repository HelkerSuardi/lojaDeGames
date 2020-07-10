import { Component, OnInit } from '@angular/core';
import { JogosService } from '../services/jogos.service';
import { ActivatedRoute } from '@angular/router';
import { Jogo } from '../models/jogo.model';

export class Imagem {
    url: string;
    arquivo: File;
}

@Component({
    selector: 'app-edicao-lista-imagens-jogo',
    templateUrl: './edicao-lista-imagens-jogo.component.html',
    styleUrls: ['./edicao-lista-imagens-jogo.component.scss']
})
export class EdicaoListaImagensJogoComponent implements OnInit {

    carregando: boolean;
    idJogo: string;
    imagens: Imagem[] = [];

    constructor(
        private actvitedRoute: ActivatedRoute,
        private jogosService: JogosService
    ) { }

    async ngOnInit() {

        this.carregando = true;

        this.idJogo = this.actvitedRoute.snapshot.paramMap.get('id');

        const jogo = await this.jogosService.get(this.idJogo);

        if (jogo.imagens) {

            console.log(jogo.imagens);

            this.imagens = jogo.imagens.map<Imagem>(urlImagem => {
                return { url: urlImagem, arquivo: null };
            });

        }

        this.carregando = false;

    }

    adicionarImagens(event: any) {

        const arquivos = event.target.files as FileList;

        for (let index = 0; index < arquivos.length; index++) {

            const arquivo = arquivos[index];

            this.imagens.push({ url: null, arquivo: arquivo });

        }

    }

    imagemEnviada() {
        this.atualizarImagens();
    }

    excluirImagem(imagem: Imagem) {

        const indice = this.imagens.indexOf(imagem);
        this.imagens.splice(indice, 1);

        this.atualizarImagens();

    }

    async atualizarImagens() {

        const imagensJogo = this.imagens.filter(x => x.url).map(x => x.url);

        console.log(imagensJogo);

        const jogo = { imagens: imagensJogo } as Jogo;

        await this.jogosService.update(this.idJogo, jogo);

    }



}
