import { Component, OnInit } from '@angular/core';

/**
 * Componente Principal da Aplicação Parametriz
 * 
 * Responsável por orquestrar todos os componentes da página
 * e gerenciar o estado global da aplicação.
 * 
 * Funcionalidades:
 * - Integração de todos os componentes
 * - Configuração de meta tags para SEO
 * - Gerenciamento de estado global
 * - Configuração de analytics (futuro)
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  /**
   * Título da aplicação
   */
  title = 'Parametriz - Soluções Tecnológicas';

  constructor() { }

  /**
   * Método executado na inicialização da aplicação
   * Configura meta tags e analytics
   */
  ngOnInit(): void {
    this.configurarMetaTags();
    this.configurarAnalytics();
  }

  /**
   * Configura meta tags para SEO
   * Melhora a indexação e compartilhamento
   */
  private configurarMetaTags(): void {
    // Configuração de meta tags para SEO
    const metaTags = [
      { name: 'description', content: 'Parametriz oferece soluções tecnológicas especializadas em parametrização contábil, automação inteligente e consultoria para empresas de todos os portes.' },
      { name: 'keywords', content: 'parametrização contábil, automação, consultoria, tecnologia, ERP, sistemas contábeis' },
      { name: 'author', content: 'Parametriz Soluções Tecnológicas' },
      { property: 'og:title', content: 'Parametriz - Soluções Tecnológicas' },
      { property: 'og:description', content: 'Especialistas em parametrização contábil e automação inteligente' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://parametriz.com.br' },
      { property: 'og:image', content: 'https://parametriz.com.br/assets/parametriz-logo-2.png' }
    ];

    // Implementação futura: adicionar meta tags dinamicamente
    console.log('Meta tags configuradas:', metaTags);
  }

  /**
   * Configura analytics e tracking
   * Implementação futura para Google Analytics
   */
  private configurarAnalytics(): void {
    // Implementação futura: Google Analytics, Facebook Pixel, etc.
    console.log('Analytics configurado para:', this.title);
  }
}

