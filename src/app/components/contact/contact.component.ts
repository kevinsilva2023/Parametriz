import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * Interface para os dados do formulário de contato
 * Define a estrutura dos dados coletados
 */
interface DadosFormularioContato {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  servicoInteresse: string;
  mensagem: string;
  consentimento: boolean;
}

/**
 * Componente de Contato
 * 
 * Responsável por gerenciar o formulário de contato e as informações
 * da empresa. Inclui:
 * - Formulário completo com validações
 * - Informações de contato da empresa
 * - FAQ rápido para dúvidas comuns
 * - Integração com logo da Parametriz
 * - Envio de dados via email ou API
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    // Animação para entrada e saída de elementos
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, height: 0, overflow: 'hidden' }),
        animate('300ms ease-in', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {

  /**
   * Dados do formulário de contato
   * Objeto que armazena todas as informações preenchidas
   */
  public dadosFormulario: DadosFormularioContato = {
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    servicoInteresse: '',
    mensagem: '',
    consentimento: false
  };

  /**
   * Estados do formulário
   */
  public enviandoFormulario: boolean = false;
  public formularioEnviado: boolean = false;

  /**
   * Controle do FAQ
   */
  public faqAtivo: number | null = null;

  constructor() { }

  /**
   * Método executado na inicialização do componente
   * Configura listeners para eventos externos
   */
  ngOnInit(): void {
    this.configurarListenersEventos();
  }

  /**
   * Configura listeners para eventos de outros componentes
   * Permite pré-preenchimento do formulário
   */
  private configurarListenersEventos(): void {
    // Listener para pré-preenchimento de serviço
    window.addEventListener('preencherServicoContato', (evento: any) => {
      if (evento.detail && evento.detail.servico) {
        this.dadosFormulario.servicoInteresse = evento.detail.servico;
        this.rolarParaFormulario();
      }
    });

    // Listener para interesse em processo
    window.addEventListener('preencherInteresseProcesso', (evento: any) => {
      if (evento.detail && evento.detail.tipo) {
        this.dadosFormulario.mensagem = 'Tenho interesse no processo de parametrização. Gostaria de mais informações.';
        this.dadosFormulario.servicoInteresse = 'parametrizacao';
        this.rolarParaFormulario();
      }
    });
  }

  /**
   * Rola suavemente para o formulário
   * Usado quando há pré-preenchimento automático
   */
  private rolarParaFormulario(): void {
    setTimeout(() => {
      const formulario = document.querySelector('.formulario-contato');
      if (formulario) {
        formulario.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  }

  /**
   * Formata o campo de telefone automaticamente
   * Aplica máscara durante a digitação
   * 
   * @param evento - Evento de input do campo telefone
   */
  public formatarTelefone(evento: any): void {
    let valor = evento.target.value.replace(/\D/g, ''); // Remove não-dígitos
    
    // Aplica formatação baseada no tamanho
    if (valor.length <= 10) {
      // Telefone fixo: (11) 3333-3333
      valor = valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      // Celular: (11) 99999-9999
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    
    // Atualiza o valor no modelo
    this.dadosFormulario.telefone = valor;
    evento.target.value = valor;
  }

  /**
   * Valida se o formulário está completo e válido
   * Verifica todos os campos obrigatórios
   * 
   * @returns true se o formulário é válido
   */
  private validarFormulario(): boolean {
    const { nome, email, telefone, empresa, consentimento } = this.dadosFormulario;
    
    // Verifica campos obrigatórios
    if (!nome || nome.length < 2) {
      this.exibirMensagemErro('Nome deve ter pelo menos 2 caracteres');
      return false;
    }
    
    if (!email || !this.validarEmail(email)) {
      this.exibirMensagemErro('Email deve ser válido');
      return false;
    }
    
    if (!telefone || telefone.length < 10) {
      this.exibirMensagemErro('Telefone deve ser válido');
      return false;
    }
    
    if (!empresa) {
      this.exibirMensagemErro('Empresa é obrigatória');
      return false;
    }
    
    if (!consentimento) {
      this.exibirMensagemErro('É necessário aceitar os termos');
      return false;
    }
    
    return true;
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
   * Exibe mensagem de erro temporária
   * 
   * @param mensagem - Mensagem de erro a ser exibida
   */
  private exibirMensagemErro(mensagem: string): void {
    // Implementação futura: pode usar toast, modal ou alert
    alert(mensagem);
  }

  /**
   * Envia o formulário de contato
   * Processa os dados e envia via email ou API
   */
  public async enviarFormulario(): Promise<void> {
    // Valida o formulário antes de enviar
    if (!this.validarFormulario()) {
      return;
    }

    // Inicia estado de carregamento
    this.enviandoFormulario = true;

    try {
      // Simula envio (implementação futura: integração real)
      await this.processarEnvioFormulario();
      
      // Sucesso no envio
      this.formularioEnviado = true;
      this.limparFormulario();
      
      // Remove mensagem de sucesso após 5 segundos
      setTimeout(() => {
        this.formularioEnviado = false;
      }, 5000);
      
    } catch (erro) {
      console.error('Erro ao enviar formulário:', erro);
      this.exibirMensagemErro('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      this.enviandoFormulario = false;
    }
  }

  /**
   * Processa o envio do formulário
   * Implementação placeholder para integração futura
   */
  private async processarEnvioFormulario(): Promise<void> {
    // Simula delay de envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aqui seria a integração real:
    // 1. Envio via API própria
    // 2. Integração com serviço de email (EmailJS, etc.)
    // 3. Webhook para sistema CRM
    
    console.log('Dados do formulário:', this.dadosFormulario);
    
    // Implementação futura:
    // return this.emailService.enviarContato(this.dadosFormulario);
  }

  /**
   * Limpa todos os campos do formulário
   * Reseta para estado inicial
   */
  private limparFormulario(): void {
    this.dadosFormulario = {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      servicoInteresse: '',
      mensagem: '',
      consentimento: false
    };
  }

  /**
   * Alterna a exibição de uma pergunta do FAQ
   * Controla qual pergunta está expandida
   * 
   * @param numeroFaq - Número da pergunta do FAQ (1-3)
   */
  public alternarFaq(numeroFaq: number): void {
    if (this.faqAtivo === numeroFaq) {
      // Se já está ativo, fecha
      this.faqAtivo = null;
    } else {
      // Abre a pergunta selecionada
      this.faqAtivo = numeroFaq;
    }
  }

  /**
   * Abre o Google Maps com o endereço da empresa
   * Integração com mapas externos
   */
  public abrirMapa(): void {
    const endereco = 'Av. Paulista, 1000 - Sala 1001, Bela Vista, São Paulo - SP';
    const urlMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
    window.open(urlMaps, '_blank');
  }

  /**
   * Inicia uma ligação telefônica
   * 
   * @param telefone - Número de telefone a ser chamado
   */
  public ligarTelefone(telefone: string): void {
    window.location.href = `tel:${telefone}`;
  }

  /**
   * Abre o cliente de email padrão
   * 
   * @param email - Endereço de email de destino
   */
  public enviarEmail(email: string): void {
    const assunto = 'Contato via Site - Parametriz';
    const corpo = 'Olá, gostaria de mais informações sobre os serviços da Parametriz.';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  }

  /**
   * Abre uma rede social em nova aba
   * 
   * @param rede - Nome da rede social
   */
  public abrirRedeSocial(rede: string): void {
    const urls = {
      'linkedin': 'https://linkedin.com/company/parametriz',
      'instagram': 'https://instagram.com/parametriz',
      'facebook': 'https://facebook.com/parametriz',
      'youtube': 'https://youtube.com/@parametriz'
    };
    
    const url = urls[rede as keyof typeof urls];
    if (url) {
      window.open(url, '_blank');
    }
  }

  /**
   * Obtém dados do formulário para integração externa
   * 
   * @returns Cópia dos dados atuais do formulário
   */
  public obterDadosFormulario(): DadosFormularioContato {
    return { ...this.dadosFormulario };
  }

  /**
   * Pré-preenche o formulário com dados externos
   * Útil para integrações com outros componentes
   * 
   * @param dados - Dados parciais para pré-preenchimento
   */
  public preencherFormulario(dados: Partial<DadosFormularioContato>): void {
    this.dadosFormulario = { ...this.dadosFormulario, ...dados };
  }

  /**
   * Verifica se um campo específico tem erro
   * 
   * @param campo - Nome do campo a ser verificado
   * @param formulario - Referência do formulário
   * @returns true se o campo tem erro
   */
  public campoTemErro(campo: string, formulario: any): boolean {
    const controle = formulario.controls[campo];
    return controle && controle.invalid && controle.touched;
  }

  /**
   * Obtém mensagem de erro específica para um campo
   * 
   * @param campo - Nome do campo
   * @param formulario - Referência do formulário
   * @returns Mensagem de erro ou string vazia
   */
  public obterMensagemErro(campo: string, formulario: any): string {
    const controle = formulario.controls[campo];
    
    if (!controle || !controle.errors) {
      return '';
    }
    
    const erros = controle.errors;
    
    if (erros['required']) {
      return `${campo} é obrigatório`;
    }
    
    if (erros['email']) {
      return 'Email deve ser válido';
    }
    
    if (erros['minlength']) {
      return `${campo} deve ter pelo menos ${erros['minlength'].requiredLength} caracteres`;
    }
    
    if (erros['pattern']) {
      return `${campo} deve ser válido`;
    }
    
    return 'Campo inválido';
  }

  /**
   * Reseta o estado do formulário
   * Limpa dados e estados de erro/sucesso
   */
  public resetarFormulario(): void {
    this.limparFormulario();
    this.formularioEnviado = false;
    this.enviandoFormulario = false;
  }
}

