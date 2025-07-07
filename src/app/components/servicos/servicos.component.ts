import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * Interface para definir a estrutura de um serviço
 * Padroniza os dados de cada serviço oferecido
 */
interface DadosServico {
  id: string;
  titulo: string;
  descricao: string;
  descricaoExpandida: string;
  caracteristicas: string[];
  beneficios: string[];
  etapasProcesso: string[];
  icone: string;
}

/**
 * Componente de Serviços da Empresa
 * 
 * Responsável por apresentar todos os serviços oferecidos pela Parametriz
 * de forma organizada e interativa. Inclui:
 * - Cards de serviços com hover effects
 * - Detalhes expandidos para cada serviço
 * - Animações suaves de transição
 * - Integração com seção de contato
 */
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  animations: [
    // Animação para entrada e saída dos detalhes do serviço
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-30px)' }))
      ])
    ])
  ]
})
export class ServicosComponent implements OnInit {

  /**
   * Serviço atualmente selecionado para exibir detalhes
   * null = nenhum serviço selecionado
   */
  public servicoSelecionado: string | null = null;

  /**
   * Dados completos de todos os serviços oferecidos
   * Centralizados para facilitar manutenção e expansão
   */
  private dadosServicos: DadosServico[] = [
    {
      id: 'parametrizacao',
      titulo: 'Parametrização de Sistemas',
      descricao: 'Configuração completa e personalizada de sistemas contábeis, adequando planos de contas e regras fiscais às necessidades específicas da sua empresa.',
      descricaoExpandida: 'Nossa equipe especializada realiza a configuração completa de sistemas contábeis, desde a estruturação do plano de contas até a implementação de regras fiscais complexas. Garantimos que seu sistema esteja perfeitamente alinhado com as necessidades específicas do seu negócio e em conformidade com a legislação vigente.',
      caracteristicas: ['Plano de Contas', 'Regras Fiscais', 'Integração ERP'],
      beneficios: [
        'Redução de 75% no tempo de configuração',
        'Eliminação de erros manuais de parametrização',
        'Conformidade total com legislação fiscal',
        'Integração perfeita com sistemas existentes',
        'Suporte técnico especializado contínuo'
      ],
      etapasProcesso: [
        'Análise detalhada do sistema atual',
        'Mapeamento de necessidades específicas',
        'Configuração personalizada do sistema',
        'Testes rigorosos de funcionamento',
        'Treinamento da equipe e go-live'
      ],
      icone: 'fas fa-cogs'
    },
    {
      id: 'consultoria',
      titulo: 'Consultoria Especializada',
      descricao: 'Orientação estratégica com profissionais experientes para otimizar processos e garantir compliance fiscal e contábil.',
      descricaoExpandida: 'Nossos consultores especializados oferecem orientação estratégica personalizada para otimizar seus processos contábeis e fiscais. Com vasta experiência no mercado, nossa equipe identifica oportunidades de melhoria e implementa soluções que garantem eficiência operacional e conformidade regulatória.',
      caracteristicas: ['Análise Técnica', 'Treinamento', 'Suporte 24/7'],
      beneficios: [
        'Otimização de processos contábeis',
        'Redução de riscos fiscais e regulatórios',
        'Melhoria na eficiência operacional',
        'Capacitação contínua da equipe',
        'Suporte especializado quando necessário'
      ],
      etapasProcesso: [
        'Diagnóstico completo dos processos atuais',
        'Identificação de oportunidades de melhoria',
        'Desenvolvimento de plano de ação personalizado',
        'Implementação das melhorias propostas',
        'Monitoramento e ajustes contínuos'
      ],
      icone: 'fas fa-user-tie'
    },
    {
      id: 'automacao',
      titulo: 'Automação Inteligente',
      descricao: 'Implementação de soluções automatizadas que reduzem erros manuais e aceleram processos contábeis e fiscais.',
      descricaoExpandida: 'Utilizamos tecnologias de ponta, incluindo inteligência artificial e machine learning, para automatizar processos contábeis repetitivos e propensos a erros. Nossas soluções inteligentes aprendem com os padrões do seu negócio e se adaptam continuamente para maximizar a eficiência.',
      caracteristicas: ['IA Contábil', 'Workflows', 'Relatórios'],
      beneficios: [
        'Redução de 90% em erros manuais',
        'Aceleração de processos em até 80%',
        'Relatórios automáticos e precisos',
        'Workflows inteligentes e adaptativos',
        'Economia significativa de tempo e recursos'
      ],
      etapasProcesso: [
        'Mapeamento de processos para automação',
        'Desenvolvimento de soluções personalizadas',
        'Implementação gradual das automações',
        'Treinamento em novas ferramentas',
        'Monitoramento e otimização contínua'
      ],
      icone: 'fas fa-robot'
    },
    {
      id: 'compliance',
      titulo: 'Compliance Fiscal e Tributário',
      descricao: 'Garantia de conformidade com a legislação fiscal através de auditorias, cruzamentos eletrônicos e orientações atualizadas.',
      descricaoExpandida: 'Oferecemos um serviço completo de compliance fiscal e tributário, que inclui auditorias preventivas, análise de obrigações acessórias, cruzamentos eletrônicos de dados e identificação de possíveis inconsistências. Nosso objetivo é manter sua empresa em total conformidade com as normas legais, evitando autuações e prejuízos financeiros.',
      caracteristicas: ['Auditoria Fiscal', 'Cruzamento de Dados', 'Análise SPED'],
      beneficios: [
        'Redução de riscos de autuação fiscal',
        'Identificação preventiva de inconsistências',
        'Cumprimento rigoroso das obrigações acessórias',
        'Economia com multas e juros',
        'Atualização constante com base na legislação vigente'
      ],
      etapasProcesso: [
        'Levantamento das obrigações fiscais da empresa',
        'Execução de auditoria documental e digital',
        'Análise de cruzamentos eletrônicos (SPED, DCTF, EFD)',
        'Relatório com inconsistências e plano de ação',
        'Acompanhamento e retificação quando necessário'
      ],
      icone: 'fas fa-balance-scale'
    }
  ];

  constructor() { }

  /**
   * Método executado na inicialização do componente
   * Configura observadores e animações iniciais
   */
  ngOnInit(): void {
    this.configurarObservadorAnimacoes();
  }

  /**
   * Configura o observador para animar cards quando ficam visíveis
   * Melhora a experiência visual do usuário
   */
  private configurarObservadorAnimacoes(): void {
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

    // Observa todos os cards de serviço após um pequeno delay
    setTimeout(() => {
      const cardsServico = document.querySelectorAll('.card-servico');
      cardsServico.forEach(card => observador.observe(card));
    }, 100);
  }

  /**
   * Destaca um serviço específico quando o mouse passa sobre ele
   * Cria feedback visual imediato para o usuário
   * 
   * @param idServico - Identificador do serviço a ser destacado
   */
  public destacarServico(idServico: string): void {
    // Remove destaque de todos os outros cards
    const todosCards = document.querySelectorAll('.card-servico');
    todosCards.forEach(card => {
      if (!card.classList.contains(`servico-${idServico}`)) {
        card.classList.add('desfocado');
      }
    });

    // Adiciona classe de destaque ao card atual
    const cardAtual = document.querySelector(`.card-servico.servico-${idServico}`);
    if (cardAtual) {
      cardAtual.classList.add('destacado');
    }
  }

  /**
   * Remove o destaque de todos os serviços
   * Restaura o estado visual normal dos cards
   */
  public removerDestaque(): void {
    const todosCards = document.querySelectorAll('.card-servico');
    todosCards.forEach(card => {
      card.classList.remove('desfocado', 'destacado');
    });
  }

  /**
   * Seleciona um serviço para exibir seus detalhes expandidos
   * Alterna entre mostrar/ocultar detalhes do mesmo serviço
   * 
   * @param idServico - Identificador do serviço selecionado
   */
  public selecionarServico(idServico: string): void {
    if (this.servicoSelecionado === idServico) {
      // Se o mesmo serviço já está selecionado, fecha os detalhes
      this.servicoSelecionado = null;
    } else {
      // Seleciona o novo serviço
      this.servicoSelecionado = idServico;

      // Rola suavemente para a seção de detalhes
      setTimeout(() => {
        const secaoDetalhes = document.querySelector('.detalhes-servico');
        if (secaoDetalhes) {
          secaoDetalhes.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }, 100);
    }
  }

  /**
   * Fecha a seção de detalhes do serviço
   * Remove a seleção atual e oculta os detalhes
   */
  public fecharDetalhes(): void {
    this.servicoSelecionado = null;
  }

  /**
   * Obtém o título do serviço atualmente selecionado
   * 
   * @returns Título do serviço ou string vazia se nenhum selecionado
   */
  public obterTituloServicoSelecionado(): string {
    if (!this.servicoSelecionado) return '';

    const servico = this.dadosServicos.find(s => s.id === this.servicoSelecionado);
    return servico ? servico.titulo : '';
  }

  /**
   * Obtém a descrição expandida do serviço selecionado
   * 
   * @returns Descrição detalhada do serviço
   */
  public obterDescricaoExpandidaServico(): string {
    if (!this.servicoSelecionado) return '';

    const servico = this.dadosServicos.find(s => s.id === this.servicoSelecionado);
    return servico ? servico.descricaoExpandida : '';
  }

  /**
   * Obtém a lista de benefícios do serviço selecionado
   * 
   * @returns Array com os benefícios do serviço
   */
  public obterBeneficiosServico(): string[] {
    if (!this.servicoSelecionado) return [];

    const servico = this.dadosServicos.find(s => s.id === this.servicoSelecionado);
    return servico ? servico.beneficios : [];
  }

  /**
   * Obtém as etapas do processo de implementação do serviço
   * 
   * @returns Array com as etapas do processo
   */
  public obterEtapasProcesso(): string[] {
    if (!this.servicoSelecionado) return [];

    const servico = this.dadosServicos.find(s => s.id === this.servicoSelecionado);
    return servico ? servico.etapasProcesso : [];
  }

  /**
   * Abre os detalhes de um serviço específico
   * Método alternativo para seleção de serviços
   * 
   * @param idServico - Identificador do serviço
   */
  public abrirDetalhesServico(idServico: string): void {
    this.selecionarServico(idServico);
  }

  /**
   * Redireciona para solicitação de orçamento
   * Integra com sistema de contato ou formulário específico
   */
  public solicitarOrcamento(): void {
    // Implementação futura: pode abrir modal, formulário ou navegar para página
    console.log(`Solicitando orçamento para: ${this.servicoSelecionado}`);

    // Opções de implementação:
    // 1. Navegar para seção de contato com serviço pré-selecionado
    this.navegarParaContatoComServico();

    // 2. Abrir modal específico de orçamento
    // this.abrirModalOrcamento();

    // 3. Integrar com sistema externo
    // this.integrarSistemaOrcamento();
  }

  /**
   * Agenda uma consulta para o serviço selecionado
   * Integra com sistema de agendamento
   */
  public agendarConsulta(): void {
    console.log(`Agendando consulta para: ${this.servicoSelecionado}`);

    // Implementação futura: integração com calendário ou sistema de agendamento
    this.abrirModalAgendamento();
  }

  /**
   * Navega para a seção de contato com o serviço pré-selecionado
   * Melhora a experiência do usuário ao pré-preencher informações
   */
  private navegarParaContatoComServico(): void {
    const secaoContato = document.getElementById('contact');
    if (secaoContato) {
      secaoContato.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Pode disparar evento para pré-selecionar o serviço no formulário
      this.preencherFormularioContato();
    }
  }

  /**
   * Preenche automaticamente o formulário de contato
   * com informações do serviço selecionado
   */
  private preencherFormularioContato(): void {
    // Implementação futura: integração com componente de contato
    const evento = new CustomEvent('preencherServicoContato', {
      detail: {
        servico: this.servicoSelecionado,
        titulo: this.obterTituloServicoSelecionado()
      }
    });

    window.dispatchEvent(evento);
  }

  /**
   * Abre modal para agendamento de consulta
   * Placeholder para implementação futura
   */
  private abrirModalAgendamento(): void {
    // Implementação futura do modal de agendamento
    alert(`Agendamento para ${this.obterTituloServicoSelecionado()} em desenvolvimento. Entre em contato para agendar.`);
  }

  /**
   * Obtém todos os dados de um serviço específico
   * Método utilitário para acesso completo aos dados
   * 
   * @param idServico - Identificador do serviço
   * @returns Dados completos do serviço ou null se não encontrado
   */
  public obterDadosServico(idServico: string): DadosServico | null {
    return this.dadosServicos.find(s => s.id === idServico) || null;
  }

  /**
   * Obtém lista de todos os serviços disponíveis
   * Útil para integrações com outros componentes
   * 
   * @returns Array com todos os serviços
   */
  public obterTodosServicos(): DadosServico[] {
    return [...this.dadosServicos];
  }
}

