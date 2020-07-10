import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroGeneroComponent } from './cadastro-genero/cadastro-genero.component';
import { CadastroJogoComponent } from './cadastro-jogo/cadastro-jogo.component';
import { CadastroDesensevolvedoraComponent } from './cadastro-desensevolvedora/cadastro-desensevolvedora.component';
import { CadastroPlataformaComponent } from './cadastro-plataforma/cadastro-plataforma.component';
import { EdicaoJogoComponent } from './edicao-jogo/edicao-jogo.component';
import { EdicaoListaImagensJogoComponent } from './edicao-lista-imagens-jogo/edicao-lista-imagens-jogo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { JogosComponent } from './jogos/jogos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'usuarios/cadastro', component: CadastroUsuarioComponent },
    {
        path: 'home', component: HomeComponent,
        children: [

            { path: '', redirectTo: 'jogos', pathMatch: 'full' },

            { path: 'generos/cadastro', component: CadastroGeneroComponent },
            { path: 'desensevolvedoras/cadastro', component: CadastroDesensevolvedoraComponent },
            { path: 'plataformas/cadastro', component: CadastroPlataformaComponent },
            { path: 'jogos', component: JogosComponent },
            { path: 'jogos/cadastro', component: CadastroJogoComponent },
            { path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthGuard] },

            { path: 'jogos/:id/edicao', component: EdicaoJogoComponent },
            { path: 'jogos/:id/edicao/imagens', component: EdicaoListaImagensJogoComponent },

        ]
    },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
