import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Angular locale
import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localept, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { environment } from 'src/environments/environment';
import { CadastroGeneroComponent } from './cadastro-genero/cadastro-genero.component';
import { CadastroJogoComponent } from './cadastro-jogo/cadastro-jogo.component';
import { CadastroDesensevolvedoraComponent } from './cadastro-desensevolvedora/cadastro-desensevolvedora.component';
import { CadastroPlataformaComponent } from './cadastro-plataforma/cadastro-plataforma.component';
import { EdicaoJogoComponent } from './edicao-jogo/edicao-jogo.component';
import { EdicaoListaImagensJogoComponent } from './edicao-lista-imagens-jogo/edicao-lista-imagens-jogo.component';
import { EdicaoImagemJogoComponent } from './edicao-imagem-jogo/edicao-imagem-jogo.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { JogosComponent } from './jogos/jogos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
    declarations: [
        AppComponent,
        CadastroGeneroComponent,
        CadastroJogoComponent,
        CadastroDesensevolvedoraComponent,
        CadastroPlataformaComponent,
        EdicaoJogoComponent,
        EdicaoListaImagensJogoComponent,
        EdicaoImagemJogoComponent,
        LoginComponent,
        CadastroUsuarioComponent,
        HomeComponent,
        JogosComponent,
        CarrinhoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,

        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatDividerModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule,
        MatCheckboxModule,

    ],
    providers: [
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
        { provide: LOCALE_ID, useValue: 'pt' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
