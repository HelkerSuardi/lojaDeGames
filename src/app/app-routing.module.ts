import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPlataformaComponent } from './cadastro-plataforma/cadastro-plataforma.component';
import { EdicaoPlataformaComponent } from './edicao-plataforma/edicao-plataforma.component';
import { CadastroJogoComponent } from './cadastro-jogo/cadastro-jogo.component';
import { CadastroGeneroComponent } from './cadastro-genero/cadastro-genero.component';
import { CadastroFaixaEtariaComponent } from './cadastro-faixa-etaria/cadastro-faixa-etaria.component';
import { CadastroDesensevolvedoraComponent } from './cadastro-desensevolvedora/cadastro-desensevolvedora.component';


const routes: Routes = [

  { path: 'plataformas/cadastro', component: CadastroPlataformaComponent },
  { path: 'plataformas/:id/edicao', component: EdicaoPlataformaComponent },
  { path: 'jogos/cadastro', component: CadastroJogoComponent },
  { path: 'generos/cadastro', component: CadastroGeneroComponent },
  { path: 'faixas-etarias/cadastro', component: CadastroFaixaEtariaComponent },
  { path: 'desensevolvedoras/cadastro', component: CadastroDesensevolvedoraComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
