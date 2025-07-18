import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Site
import { SiteComponent } from './pages/site/site.component';
import { AppComponent } from './app.component';
import { ApresentacaoInicialComponent } from './components/site/apresentacao-inicial/apresentacao-inicial.component';
import { ModalCalendlyComponent } from './components/site/apresentacao-inicial/modal-calendly/modal-calendly.component';
import { BeneficiosComponent } from './components/site/beneficios/beneficios.component';
import { LogoClientesComponent } from './components/site/beneficios/logo-clientes/logo-clientes.component';
import { EntreEmContato } from './components/site/entre-em-contato/entre-em-contato.component';
import { FooterComponent } from './components/site/footer/footer.component';
import { NavbarComponent } from './components/site/navbar/navbar.component';
import { NossosServicosComponent } from './components/site/nossos-servicos/nossos-servicos.component';
import { ModalComponent } from './components/site/nossos-servicos/modal/modal.component';
import { PerguntasRespostasComponent } from './components/site/perguntas-respostas/perguntas-respostas.component';
import { ServicosComponent } from './components/site/servicos/servicos.component';
import { ProcessoComponent } from './components/site/processo/processo.component';

// Reforma Tributária
import { ReformaTributariaComponent } from './pages/reforma-tributaria/reforma-tributaria.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollSpyModule } from 'ngx-scrollspy';

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
    ModalCalendlyComponent,
    SiteComponent,
    ReformaTributariaComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Para animações
    FormsModule, // Para formulários
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgbModule,
    ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
