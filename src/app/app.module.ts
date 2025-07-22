import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';

// Site
import { SiteComponent } from './pages/site/site.component';
import { AppComponent } from './app.component';
import { ApresentacaoInicialComponent } from './components/site/apresentacao-inicial/apresentacao-inicial.component';
import { ModalCalendlyComponent } from './components/site/apresentacao-inicial/modal-calendly/modal-calendly.component';
import { BeneficiosComponent } from './components/site/beneficios/beneficios.component';
import { LogoClientesComponent } from './components/site/beneficios/logo-clientes/logo-clientes.component';
import { EntreEmContato } from './components/site/entre-em-contato/entre-em-contato.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './components/site/navbar/navbar.component';
import { NossosServicosComponent } from './components/site/nossos-servicos/nossos-servicos.component';
import { ModalComponent } from './components/site/nossos-servicos/modal/modal.component';
import { PerguntasRespostasComponent } from './components/site/perguntas-respostas/perguntas-respostas.component';
import { ServicosComponent } from './components/site/servicos/servicos.component';
import { ProcessoComponent } from './components/site/processo/processo.component';

// Reforma Tributária
import { ReformaTributariaComponent } from './pages/reforma-tributaria/reforma-tributaria.component';
import { NgxTimelineModule } from '@frxjs/ngx-timeline';


// Blog
import { BlogComponent } from './pages/blog/blog.component';
import { SidebarReformaComponent } from './components/reforma-tributaria/sidebar-reforma/sidebar-reforma.component';
import { ConteudoReformaComponent } from './components/reforma-tributaria/conteudo-reforma/conteudo-reforma.component';
import { IntroducaoComponent } from './components/reforma-tributaria/conteudo-reforma/introducao/introducao.component';
import { CronogramaComponent } from './components/reforma-tributaria/conteudo-reforma/cronograma/cronograma.component';
import { FatoGeradorComponent } from './components/reforma-tributaria/conteudo-reforma/fato-gerador/fato-gerador.component';
import { CalculoComponent } from './components/reforma-tributaria/conteudo-reforma/calculo/calculo.component';
import { CreditoComponent } from './components/reforma-tributaria/conteudo-reforma/credito/credito.component';
import { RecolhimentoComponent } from './components/reforma-tributaria/conteudo-reforma/recolhimento/recolhimento.component';
import { RestituicaoCashbackComponent } from './components/reforma-tributaria/conteudo-reforma/restituicao-cashback/restituicao-cashback.component';
import { SplitPaymentComponent } from './components/reforma-tributaria/conteudo-reforma/split-payment/split-payment.component';
import { IpiComponent } from './components/reforma-tributaria/conteudo-reforma/ipi/ipi.component';
import { SimplesNacionalComponent } from './components/reforma-tributaria/conteudo-reforma/simples-nacional/simples-nacional.component';
import { ImpostoSeletivoComponent } from './components/reforma-tributaria/conteudo-reforma/imposto-seletivo/imposto-seletivo.component';
import { NotaFiscalComponent } from './components/reforma-tributaria/conteudo-reforma/nota-fiscal/nota-fiscal.component';
import { DuvidasComponent } from './components/reforma-tributaria/conteudo-reforma/duvidas/duvidas.component';
import { BaseLegalComponent } from './components/reforma-tributaria/conteudo-reforma/base-legal/base-legal.component';

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
    BlogComponent,
    SidebarReformaComponent,
    ConteudoReformaComponent,
    IntroducaoComponent,
    CronogramaComponent,
    FatoGeradorComponent,
    CalculoComponent,
    CreditoComponent,
    RecolhimentoComponent,
    RestituicaoCashbackComponent,
    SplitPaymentComponent,
    IpiComponent,
    SimplesNacionalComponent,
    ImpostoSeletivoComponent,
    NotaFiscalComponent,
    DuvidasComponent,
    BaseLegalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Para animações
    FormsModule, // Para formulários
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgbModule,
    NgbScrollSpyModule,
    NgxTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
