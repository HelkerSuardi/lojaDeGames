import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { environment } from 'src/environments/environment';
import { CadastroJogoComponent } from './cadastro-jogo/cadastro-jogo.component';
import { CadastroPlataformaComponent } from './cadastro-plataforma/cadastro-plataforma.component';
import { EdicaoPlataformaComponent } from './edicao-plataforma/edicao-plataforma.component';
import { CadastroGeneroComponent } from './cadastro-genero/cadastro-genero.component';
import { CadastroDesensevolvedoraComponent } from './cadastro-desensevolvedora/cadastro-desensevolvedora.component';
import { CadastroFaixaEtariaComponent } from './cadastro-faixa-etaria/cadastro-faixa-etaria.component';
import { EdicaoJogoComponent } from './edicao-jogo/edicao-jogo.component';
import { EdicaoGeneroComponent } from './edicao-genero/edicao-genero.component';
import { EdicaoFaixaEtariaComponent } from './edicao-faixa-etaria/edicao-faixa-etaria.component';
import { EdicaoDesensevolvedoraComponent } from './edicao-desensevolvedora/edicao-desensevolvedora.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroJogoComponent,
    CadastroPlataformaComponent,
    EdicaoPlataformaComponent,
    CadastroGeneroComponent,
    CadastroDesensevolvedoraComponent,
    CadastroFaixaEtariaComponent,
    EdicaoJogoComponent,
    EdicaoGeneroComponent,
    EdicaoFaixaEtariaComponent,
    EdicaoDesensevolvedoraComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
