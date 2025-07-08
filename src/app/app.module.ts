import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApresentacaoInicialComponent } from './components/apresentacao-inicial/apresentacao-inicial.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ProcessoComponent } from './components/processo/processo.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { EntreEmContato } from './components/entre-em-contato/entre-em-contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerguntasRespostasComponent } from './components/perguntas-respostas/perguntas-respostas.component';
import { NossosServicosComponent } from './components/nossos-servicos/nossos-servicos.component';
import { ModalComponent } from './components/nossos-servicos/modal/modal.component';
import { LogoClientesComponent } from './components/beneficios/logo-clientes/logo-clientes.component';
import { ModalCalendlyComponent } from './components/apresentacao-inicial/modal-calendly/modal-calendly.component';

/**
 * Módulo principal da aplicação Parametriz
 * 
 * Configura todos os componentes, módulos e dependências
 * necessárias para o funcionamento da aplicação.
 */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApresentacaoInicialComponent,
    ServicosComponent,
    ProcessoComponent,
    BeneficiosComponent,
    EntreEmContato,
    FooterComponent,
    PerguntasRespostasComponent,
    NossosServicosComponent,
    ModalComponent,
    LogoClientesComponent,
    ModalCalendlyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Para animações
    FormsModule, // Para formulários
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
