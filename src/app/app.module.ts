import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApresentacaoInicialComponent } from './components/apresentacao-inicial/apresentacao-inicial.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

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
    ServicesComponent,
    ProcessComponent,
    BenefitsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Para animações
    FormsModule, // Para formulários
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
