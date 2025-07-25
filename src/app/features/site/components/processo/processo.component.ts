import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * Interface para definir os dados de uma etapa do processo
 * Padroniza as informações de cada etapa
 */
interface DadosEtapaProcesso {
  numero: number;
  titulo: string;
  descricao: string;
  atividades: string[];
  tempoEstimado: string;
  icone: string;
}

/**
 * Componente do Processo de Trabalho
 * 
 * Apresenta de forma visual e interativa como a Parametriz trabalha,
 * mostrando cada etapa do processo de parametrização de sistemas.
 * Inclui:
 * - Timeline interativa com 4 etapas
 * - Detalhes expandidos para cada etapa
 * - Estatísticas do processo
 * - Call-to-actions para iniciar o processo
 */
@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss'],
  animations: [
    // Animação para expandir/contrair detalhes das etapas
    trigger('expandirContrair', [
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
export class ProcessoComponent implements OnInit {

  /**
   * Etapa atualmente ativa/selecionada
   * Controla qual etapa está expandida e destacada
   */
  public etapaAtiva: number = 0;


  /**
   * Dados detalhados de todas as etapas do processo
   * Centralizados para facilitar manutenção
   */
  private etapasProcesso: DadosEtapaProcesso[] = [
    {
      numero: 1,
      titulo: 'Análise Inicial',
      descricao: 'Avaliamos sua estrutura atual, identificamos necessidades e definimos o escopo da parametrização.',
      atividades: [
        'Levantamento da estrutura fiscal atual',
        'Identificação de necessidades específicas',
        'Análise de sistemas existentes',
        'Definição do escopo do projeto',
        'Elaboração do cronograma detalhado'
      ],
      tempoEstimado: '3-5 dias úteis',
      icone: 'fas fa-search'
    },
    {
      numero: 2,
      titulo: 'Configuração',
      descricao: 'Implementamos as configurações necessárias, adaptando sistemas às suas regras de negócio.',
      atividades: [
        'Implementação de regras fiscais',
        'Parametrização de workflows',
        'Configuração de integrações',
        'Customização de relatórios'
      ],
      tempoEstimado: '1-2 semanas',
      icone: 'fas fa-tools'
    },
    {
      numero: 3,
      titulo: 'Testes & Validação',
      descricao: 'Realizamos testes rigorosos para garantir que tudo funcione perfeitamente.',
      atividades: [
        'Testes de funcionalidade completos',
        'Validação de regras fiscais',
        'Testes de integração com sistemas',
        'Simulação de cenários reais',
        'Correção de inconsistências'
      ],
      tempoEstimado: '3-5 dias úteis',
      icone: 'fas fa-check-circle'
    },
    {
      numero: 4,
      titulo: 'Entrega & Suporte',
      descricao: 'Entregamos o projeto finalizado com treinamento e suporte contínuo.',
      atividades: [
        'Entrega oficial do projeto',
        'Treinamento da equipe usuária',
        'Documentação completa',
        'Suporte pós-implementação',
        'Monitoramento de performance'
      ],
      tempoEstimado: '2-3 dias úteis',
      icone: 'fas fa-rocket'
    }
  ];

  constructor() { }

  /**
   * Método executado na inicialização do componente
   * Configura animações e observadores
   */
  ngOnInit(): void {
    this.configurarAnimacoesEntrada();
    this.iniciarAnimacaoAutomatica();
  }

  /**
   * Configura as animações de entrada dos elementos
   * Anima os elementos quando ficam visíveis na tela
   */
  private configurarAnimacoesEntrada(): void {
    const opcoes = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('animate-in');
          
          // Inicia animação sequencial das etapas
          if (entrada.target.classList.contains('timeline-processo')) {
            this.animarEtapasSequencialmente();
          }
        }
      });
    }, opcoes);

    // Observa a timeline após um pequeno delay
    setTimeout(() => {
      const timeline = document.querySelector('.timeline-processo');
      if (timeline) {
        observador.observe(timeline);
      }
    }, 100);
  }

  /**
   * Anima as etapas do processo sequencialmente
   * Cria um efeito visual de construção da timeline
   */
  private animarEtapasSequencialmente(): void {
    const etapas = document.querySelectorAll('.etapa-processo');
    
    etapas.forEach((etapa, indice) => {
      setTimeout(() => {
        etapa.classList.add('animate-in');
      }, indice * 200);
    });
  }

  /**
   * Inicia animação automática das etapas
   * Cicla automaticamente pelas etapas para demonstração
   */
  private iniciarAnimacaoAutomatica(): void {
    // Desabilitado por padrão - pode ser ativado se desejado
    // setInterval(() => {
    //   this.proximaEtapa();
    // }, 4000);
  }

  /**
   * Seleciona uma etapa específica do processo
   * Expande os detalhes da etapa selecionada
   * 
   * @param numeroEtapa - Número da etapa a ser selecionada (1-4)
   */
  public selecionarEtapa(numeroEtapa: number): void {
    if (numeroEtapa === this.etapaAtiva) {
      this.etapaAtiva = 0;
      numeroEtapa = this.etapaAtiva;
    } 
    
    if (numeroEtapa >= 1 && numeroEtapa <= 4) {
      this.etapaAtiva = numeroEtapa;
      this.atualizarIndicadoresVisuais(numeroEtapa);
    }
  }

  /**
   * Destaca uma etapa quando o mouse passa sobre ela
   * Fornece feedback visual imediato
   * 
   * @param numeroEtapa - Número da etapa a ser destacada
   */
  public destacarEtapa(numeroEtapa: number): void {
    const etapa = document.querySelector(`.etapa-processo:nth-child(${numeroEtapa})`);
    if (etapa) {
      etapa.classList.add('destacada');
    }
  }

  /**
   * Remove o destaque de todas as etapas
   * Restaura o estado visual normal
   */
  public removerDestaque(): void {
    const etapas = document.querySelectorAll('.etapa-processo');
    etapas.forEach(etapa => {
      etapa.classList.remove('destacada');
    });
  }

  /**
   * Avança para a próxima etapa do processo
   * Usado na animação automática ou navegação manual
   */
  public proximaEtapa(): void {
    const proximaEtapa = this.etapaAtiva < 4 ? this.etapaAtiva + 1 : 1;
    this.selecionarEtapa(proximaEtapa);
  }

  /**
   * Volta para a etapa anterior do processo
   * Navegação manual reversa
   */
  public etapaAnterior(): void {
    const etapaAnterior = this.etapaAtiva > 1 ? this.etapaAtiva - 1 : 4;
    this.selecionarEtapa(etapaAnterior);
  }

  /**
   * Atualiza os indicadores visuais da timeline
   * Mostra progresso e estado atual
   * 
   * @param etapaAtual - Número da etapa atualmente ativa
   */
  private atualizarIndicadoresVisuais(etapaAtual: number): void {
    // Atualiza classes CSS para mostrar progresso
    const etapas = document.querySelectorAll('.etapa-processo');
    
    etapas.forEach((etapa, indice) => {
      const numeroEtapa = indice + 1;
      
      etapa.classList.remove('ativa', 'concluida');
      
      if (numeroEtapa === etapaAtual) {
        etapa.classList.add('ativa');
      } else if (numeroEtapa < etapaAtual) {
        etapa.classList.add('concluida');
      }
    });
  }

  /**
   * Obtém as atividades de uma etapa específica
   * 
   * @param numeroEtapa - Número da etapa
   * @returns Array com as atividades da etapa
   */
  public obterAtividadesEtapa(numeroEtapa: number): string[] {
    const etapa = this.etapasProcesso.find(e => e.numero === numeroEtapa);
    return etapa ? etapa.atividades : [];
  }

  /**
   * Obtém o tempo estimado de uma etapa específica
   * 
   * @param numeroEtapa - Número da etapa
   * @returns String com o tempo estimado
   */
  public obterTempoEtapa(numeroEtapa: number): string {
    const etapa = this.etapasProcesso.find(e => e.numero === numeroEtapa);
    return etapa ? etapa.tempoEstimado : '';
  }

  /**
   * Inicia o processo de parametrização
   * Redireciona para formulário de contato ou agendamento
   */
  public iniciarProcesso(): void {
    console.log('Iniciando processo de parametrização...');
    
    // Navega para seção de contato com processo pré-selecionado
    this.navegarParaContatoComProcesso();
  }

  /**
   * Baixa o guia completo do processo
   * Fornece documento detalhado sobre o processo
   */
  public baixarGuiaProcesso(): void {
    console.log('Baixando guia do processo...');
    
    // Implementação futura: pode gerar PDF ou baixar arquivo
    this.gerarGuiaProcessoPDF();
  }

  /**
   * Navega para seção de contato com informações do processo
   * Pré-preenche formulário com interesse no processo
   */
  private navegarParaContatoComProcesso(): void {
    const secaoContato = document.getElementById('contacto');
    if (secaoContato) {
      secaoContato.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Dispara evento para pré-preencher formulário
      const evento = new CustomEvent('preencherInteresseProcesso', {
        detail: {
          tipo: 'processo-parametrizacao',
          etapaInteresse: this.etapaAtiva
        }
      });
      
      window.dispatchEvent(evento);
    }
  }

  /**
   * Gera PDF com guia completo do processo
   * Implementação placeholder para futuro desenvolvimento
   */
  private gerarGuiaProcessoPDF(): void {
    // Implementação futura: geração de PDF com detalhes do processo
    alert('Guia do processo em desenvolvimento. Entre em contato para receber o material completo.');
    
    // Exemplo de implementação futura:
    // this.pdfService.gerarGuiaProcesso(this.etapasProcesso);
  }

  /**
   * Obtém dados completos de uma etapa específica
   * 
   * @param numeroEtapa - Número da etapa
   * @returns Dados completos da etapa ou null se não encontrada
   */
  public obterDadosEtapa(numeroEtapa: number): DadosEtapaProcesso | null {
    return this.etapasProcesso.find(e => e.numero === numeroEtapa) || null;
  }

  /**
   * Obtém todas as etapas do processo
   * 
   * @returns Array com todas as etapas
   */
  public obterTodasEtapas(): DadosEtapaProcesso[] {
    return [...this.etapasProcesso];
  }

  /**
   * Calcula o progresso atual do processo
   * 
   * @returns Porcentagem de progresso (0-100)
   */
  public calcularProgressoProcesso(): number {
    return (this.etapaAtiva / this.etapasProcesso.length) * 100;
  }

  /**
   * Verifica se uma etapa está concluída
   * 
   * @param numeroEtapa - Número da etapa a verificar
   * @returns true se a etapa está concluída
   */
  public etapaEstaConcluida(numeroEtapa: number): boolean {
    return numeroEtapa < this.etapaAtiva;
  }

  /**
   * Verifica se uma etapa está ativa
   * 
   * @param numeroEtapa - Número da etapa a verificar
   * @returns true se a etapa está ativa
   */
  public etapaEstaAtiva(numeroEtapa: number): boolean {
    return numeroEtapa === this.etapaAtiva;
  }

  public navegarParaSecaoContato() {
    const elementoSecao = document.getElementById('contato');
    if (elementoSecao) {
      elementoSecao.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

