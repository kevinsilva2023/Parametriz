import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

/**
 * Componente do Rodapé
 * 
 * Responsável por exibir informações finais da empresa, links úteis,
 * redes sociais e funcionalidades auxiliares. Inclui:
 * - Informações da empresa com logo
 * - Links para serviços e páginas
 * - Newsletter para captação de leads
 * - Redes sociais com links externos
 * - Botão voltar ao topo
 * - Links legais e copyright
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  /**
   * Ano atual para copyright
   * Atualizado automaticamente
   */
  public anoAtual: number = new Date().getFullYear();

  /**
   * Controle da newsletter
   */
  public emailNewsletter: string = '';
  public inscrevendoNewsletter: boolean = false;
  public newsletterInscrita: boolean = false;

  /**
   * Controle do botão voltar ao topo
   */
  public mostrarBotaoTopo: boolean = false;

  /**
   * Timeout para reset da mensagem de newsletter
   */
  private timeoutNewsletter: any;

  constructor() { }

  /**
   * Método executado na inicialização do componente
   * Configura observadores e listeners
   */
  ngOnInit(): void {
    this.configurarObservadorScroll();
  }

  /**
   * Método executado na destruição do componente
   * Limpa timeouts e listeners
   */
  ngOnDestroy(): void {
    if (this.timeoutNewsletter) {
      clearTimeout(this.timeoutNewsletter);
    }
  }

  /**
   * Listener para eventos de scroll da janela
   * Controla a visibilidade do botão voltar ao topo
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.mostrarBotaoTopo = scrollTop > 500; // Mostra após 500px de scroll
  }

  /**
   * Configura observador para animações de entrada
   * Anima elementos quando ficam visíveis
   */
  private configurarObservadorScroll(): void {
    const opcoes = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('animate-in');
        }
      });
    }, opcoes);

    // Observa as colunas do rodapé após um pequeno delay
    setTimeout(() => {
      const colunas = document.querySelectorAll('.coluna-rodape');
      colunas.forEach(coluna => observador.observe(coluna));
    }, 100);
  }

  /**
   * Navega para uma seção específica da página
   * Scroll suave até a seção desejada
   * 
   * @param secaoId - ID da seção de destino
   * @param evento - Evento do clique para prevenir comportamento padrão
   */
  public navegarParaSecao(secaoId: string, evento: Event): void {
    evento.preventDefault();
    
    const secao = document.getElementById(secaoId);
    if (secao) {
      secao.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Abre uma página específica
   * Placeholder para navegação entre páginas
   * 
   * @param pagina - Nome da página a ser aberta
   * @param evento - Evento do clique
   */
  public abrirPagina(pagina: string, evento: Event): void {
    evento.preventDefault();
    
    // Implementação futura: roteamento Angular ou links externos
    console.log(`Navegando para página: ${pagina}`);
    
    // Exemplos de implementação:
    // this.router.navigate([`/${pagina}`]);
    // window.open(`https://parametriz.com.br/${pagina}`, '_blank');
    
    this.exibirMensagemDesenvolvimento(pagina);
  }

  /**
   * Abre modal de serviço específico
   * Placeholder para modais de serviços
   * 
   * @param servico - Nome do serviço
   * @param evento - Evento do clique
   */
  public abrirModalServico(servico: string, evento: Event): void {
    evento.preventDefault();
    
    console.log(`Abrindo modal do serviço: ${servico}`);
    
    // Implementação futura: modal com detalhes do serviço
    this.exibirMensagemDesenvolvimento(`Serviço: ${servico}`);
  }

  /**
   * Abre uma rede social em nova aba
   * 
   * @param rede - Nome da rede social
   * @param evento - Evento do clique
   */
  public abrirRedeSocial(rede: string, evento: Event): void {
    evento.preventDefault();
    
    const urls = {
      'linkedin': 'https://linkedin.com/company/parametriz',
      'instagram': 'https://instagram.com/parametriz',
      'facebook': 'https://facebook.com/parametriz',
      'youtube': 'https://youtube.com/@parametriz'
    };
    
    const url = urls[rede as keyof typeof urls];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  /**
   * Abre o WhatsApp com mensagem pré-definida
   * 
   * @param evento - Evento do clique
   */
  public abrirWhatsApp(evento: Event): void {
    evento.preventDefault();
    
    const telefone = '5511999999999'; // Número da empresa
    const mensagem = 'Olá! Gostaria de saber mais sobre os serviços da Parametriz.';
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Processa a inscrição na newsletter
   * Valida email e simula envio
   */
  public async inscreverNewsletter(): Promise<void> {
    if (!this.emailNewsletter || !this.validarEmail(this.emailNewsletter)) {
      return;
    }

    this.inscrevendoNewsletter = true;

    try {
      // Simula processo de inscrição
      await this.processarInscricaoNewsletter();
      
      // Sucesso na inscrição
      this.newsletterInscrita = true;
      this.emailNewsletter = '';
      
      // Remove mensagem de sucesso após 5 segundos
      this.timeoutNewsletter = setTimeout(() => {
        this.newsletterInscrita = false;
      }, 5000);
      
    } catch (erro) {
      console.error('Erro ao inscrever na newsletter:', erro);
      alert('Erro ao realizar inscrição. Tente novamente.');
    } finally {
      this.inscrevendoNewsletter = false;
    }
  }

  /**
   * Processa a inscrição na newsletter
   * Implementação placeholder para integração futura
   */
  private async processarInscricaoNewsletter(): Promise<void> {
    // Simula delay de processamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(`Email inscrito na newsletter: ${this.emailNewsletter}`);
    
    // Implementação futura:
    // 1. Integração com serviço de email marketing (Mailchimp, etc.)
    // 2. API própria para gerenciar newsletter
    // 3. Validação de email duplicado
    
    // return this.newsletterService.inscrever(this.emailNewsletter);
  }

  /**
   * Valida formato do email
   * 
   * @param email - Email a ser validado
   * @returns true se o email é válido
   */
  private validarEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  /**
   * Volta suavemente para o topo da página
   * Animação de scroll suave
   */
  public voltarAoTopo(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Exibe mensagem de desenvolvimento
   * Placeholder para funcionalidades futuras
   * 
   * @param recurso - Nome do recurso em desenvolvimento
   */
  private exibirMensagemDesenvolvimento(recurso: string): void {
    alert(`${recurso} em desenvolvimento. Em breve estará disponível!`);
  }

  /**
   * Obtém informações de contato da empresa
   * Dados centralizados para reutilização
   * 
   * @returns Objeto com informações de contato
   */
  public obterInformacoesContato(): any {
    return {
      telefone: '(11) 99999-9999',
      email: 'contato@parametriz.com.br',
      endereco: 'Av. Paulista, 1000 - Sala 1001, São Paulo - SP',
      cnpj: '12.345.678/0001-90',
      horarioAtendimento: 'Segunda a Sexta: 8h às 18h'
    };
  }

  /**
   * Obtém links das redes sociais
   * URLs centralizadas para manutenção
   * 
   * @returns Objeto com URLs das redes sociais
   */
  public obterRedesSociais(): any {
    return {
      linkedin: 'https://linkedin.com/company/parametriz',
      instagram: 'https://instagram.com/parametriz',
      facebook: 'https://facebook.com/parametriz',
      youtube: 'https://youtube.com/@parametriz',
      whatsapp: 'https://wa.me/5511999999999'
    };
  }

  /**
   * Obtém lista de serviços da empresa
   * Dados para links e navegação
   * 
   * @returns Array com serviços oferecidos
   */
  public obterServicos(): string[] {
    return [
      'Parametrização de Sistemas',
      'Consultoria Especializada',
      'Automação Inteligente',
      'Treinamento e Capacitação',
      'Suporte Técnico 24/7'
    ];
  }

  /**
   * Verifica se um email já está inscrito na newsletter
   * Implementação futura para evitar duplicatas
   * 
   * @param email - Email a ser verificado
   * @returns Promise<boolean> indicando se já está inscrito
   */
  public async verificarEmailInscrito(email: string): Promise<boolean> {
    // Implementação futura: consulta à base de dados
    return false;
  }

  /**
   * Obtém estatísticas da newsletter
   * Dados para dashboard administrativo
   * 
   * @returns Objeto com estatísticas
   */
  public obterEstatisticasNewsletter(): any {
    return {
      totalInscritos: 1250,
      taxaAbertura: 85,
      ultimoEnvio: '2024-01-15'
    };
  }

  /**
   * Formata número de telefone para exibição
   * 
   * @param telefone - Número bruto
   * @returns Número formatado
   */
  public formatarTelefone(telefone: string): string {
    return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  /**
   * Gera link de compartilhamento para redes sociais
   * 
   * @param rede - Nome da rede social
   * @param url - URL a ser compartilhada
   * @param texto - Texto do compartilhamento
   * @returns URL de compartilhamento
   */
  public gerarLinkCompartilhamento(rede: string, url: string, texto: string): string {
    const baseUrls = {
      'facebook': `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      'twitter': `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(texto)}`,
      'linkedin': `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    
    return baseUrls[rede as keyof typeof baseUrls] || '';
  }
}

