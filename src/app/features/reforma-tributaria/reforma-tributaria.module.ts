import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReformaTributariaRoutingModule } from './reforma-tributaria-routing.module';

import { ReformaTributariaComponent } from './pages/reforma-tributaria.component';
import { SidebarReformaComponent } from './components/sidebar-reforma/sidebar-reforma.component';
import { ConteudoReformaComponent } from './components/conteudo-reforma/conteudo-reforma.component';
import { IntroducaoComponent } from './components/conteudo-reforma/introducao/introducao.component';
import { CronogramaComponent } from './components/conteudo-reforma/cronograma/cronograma.component';
import { FatoGeradorComponent } from './components/conteudo-reforma/fato-gerador/fato-gerador.component';
import { CalculoComponent } from './components/conteudo-reforma/calculo/calculo.component';
import { CreditoComponent } from './components/conteudo-reforma/credito/credito.component';
import { RecolhimentoComponent } from './components/conteudo-reforma/recolhimento/recolhimento.component';
import { RestituicaoCashbackComponent } from './components/conteudo-reforma/restituicao-cashback/restituicao-cashback.component';
import { SplitPaymentComponent } from './components/conteudo-reforma/split-payment/split-payment.component';
import { IpiComponent } from './components/conteudo-reforma/ipi/ipi.component';
import { SimplesNacionalComponent } from './components/conteudo-reforma/simples-nacional/simples-nacional.component';
import { ImpostoSeletivoComponent } from './components/conteudo-reforma/imposto-seletivo/imposto-seletivo.component';
import { NotaFiscalComponent } from './components/conteudo-reforma/nota-fiscal/nota-fiscal.component';
import { DuvidasComponent } from './components/conteudo-reforma/duvidas/duvidas.component';
import { BaseLegalComponent } from './components/conteudo-reforma/base-legal/base-legal.component';

import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ReformaTributariaComponent,
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
    CommonModule,
    ReformaTributariaRoutingModule,
    AccordionModule,
    SharedModule
  ]
})
export class ReformaTributariaModule { }
