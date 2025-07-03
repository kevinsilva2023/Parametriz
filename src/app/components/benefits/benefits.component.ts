import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * Interface para definir a estrutura de um depoimento
 * Padroniza os dados dos testemunhos de clientes
 */
interface DadosDepoimento {
  id: number;
  nome: string;
  cargo: string;
  empresa: string;
  texto: string;
  avatar: string;
  avaliacao: number; // 1-5 estrelas
}

/**
 * Interface para definir a estrutura de um benefício
 * Padroniza os dados dos benefícios oferecidos
 */
interface DadosBeneficio {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  metrica: {
    numero: number;
    simbolo: string;
    label: string;
  };
}

/**
 * Componente de Benefícios da Parametriz
 * 
 * Apresenta os principais diferenciais e vantagens da empresa,
 * incluindo métricas, comparações antes/depois e depoimentos.
 * Recursos incluem:
 * - Cards interativos de benefícios com animações
 * - Contadores animados de métricas
 * - Comparação visual antes vs depois
 * - Carrossel de depoimentos de clientes
 * - Call-to-actions para conversão
 */
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit, OnDestroy {

  /**
   * Benefício atualmente destacado
   * Controla qual card está em foco
   */
  public beneficioDestacado: string | null = null;

  /**
   * Contadores animados das métricas
   * Valores atuais que sobem até o valor final
   */
  public contadorTempo: number = 0;
  public contadorPrecisao: number = 0;
  public contadorCompliance: number = 0;

  /**
   * Controle do carrossel de depoimentos
   */
  public indiceDepoimentoAtual: number = 0;
  public depoimentoAtual: DadosDepoimento | null = null;

  /**
   * Problemas comuns antes da Parametriz
   * Lista de dificuldades que os clientes enfrentavam
   */
  public problemasAntes: string[] = [
    'Configurações manuais demoradas e propensas a erros',
    'Falta de padronização nos processos contábeis',
    'Dificuldade para manter compliance fiscal',
    'Retrabalho constante por inconsistências',
    'Equipe sobrecarregada com tarefas repetitivas',
    'Relatórios imprecisos e desatualizados'
  ];

  /**
   * Soluções após implementação da Parametriz
   * Benefícios concretos obtidos pelos clientes
   */
  public solucoesDepois: string[] = [
    'Automação completa de configurações complexas',
    'Processos padronizados e otimizados',
    'Compliance fiscal garantido e atualizado',
    'Eliminação de retrabalho e inconsistências',
    'Equipe focada em atividades estratégicas',
    'Relatórios precisos e em tempo real'
  ];

  /**
   * Lista completa de depoimentos de clientes
   * Testemunhos reais de empresas que usam a Parametriz
   */
  public depoimentos: DadosDepoimento[] = [
    {
      id: 1,
      nome: 'Maria Silva',
      cargo: 'Diretora Financeira',
      empresa: 'TechCorp Ltda',
      texto: 'A Parametriz revolucionou nossos processos contábeis. Reduzimos o tempo de fechamento mensal em 60% e eliminamos praticamente todos os erros manuais.',
      avatar: 'assets/avatars/maria-silva.jpg',
      avaliacao: 5
    },
    {
      id: 2,
      nome: 'João Santos',
      cargo: 'Controller',
      empresa: 'Indústria Moderna S.A.',
      texto: 'Implementação rápida e suporte excepcional. Nossa equipe contábil agora pode focar em análises estratégicas ao invés de configurações manuais.',
      avatar: 'assets/avatars/joao-santos.jpg',
      avaliacao: 5
    },
    {
      id: 3,
      nome: 'Ana Costa',
      cargo: 'Gerente Contábil',
      empresa: 'Serviços Integrados',
      texto: 'O compliance fiscal nunca foi tão simples. A Parametriz mantém tudo atualizado automaticamente, dando-nos total tranquilidade.',
      avatar: 'assets/avatars/ana-costa.jpg',
      avaliacao: 5
    }
  ];

  /**
   * Intervalos ativos para limpeza
   * Controla animações e carrossel automático
   */
  private intervalosAtivos: any[] = [];

  /**
   * Controla se as animações já foram iniciadas
   */
  private animacoesIniciadas: boolean = false;

  constructor() { }

  /**
   * Método executado na inicialização do componente
   * Configura observadores, animações e carrossel
   */
  ngOnInit(): void {
    this.inicializarDepoimentos();
    this.configurarObservadorAnimacoes();
    this.iniciarCarrosselAutomatico();
  }

  /**
   * Método executado na destruição do componente
   * Limpa intervalos e observadores
   */
  ngOnDestroy(): void {
    this.limparTodosIntervalos();
  }

  /**
   * Inicializa o sistema de depoimentos
   * Define o primeiro depoimento como ativo
   */
  private inicializarDepoimentos(): void {
    if (this.depoimentos.length > 0) {
      this.depoimentoAtual = this.depoimentos[0];
    }
  }

  /**
   * Configura observador para animar elementos quando ficam visíveis
   * Melhora a experiência visual do usuário
   */
  private configurarObservadorAnimacoes(): void {
    const opcoes = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting && !this.animacoesIniciadas) {
          this.iniciarAnimacoesContadores();
          this.animacoesIniciadas = true;
        }
      });
    }, opcoes);

    // Observa a seção de benefícios
    setTimeout(() => {
      const secaoBeneficios = document.getElementById('benefits');
      if (secaoBeneficios) {
        observador.observe(secaoBeneficios);
      }
    }, 100);
  }

  /**
   * Inicia as animações dos contadores de métricas
   * Cria efeito visual atrativo de números subindo
   */
  private iniciarAnimacoesContadores(): void {
    // Anima contador de tempo (75%)
    this.animarContador(0, 75, 2000, (valor) => this.contadorTempo = valor);
    
    // Anima contador de precisão (98%) com delay
    setTimeout(() => {
      this.animarContador(0, 98, 2500, (valor) => this.contadorPrecisao = valor);
    }, 300);
    
    // Anima contador de compliance (100%) com delay maior
    setTimeout(() => {
      this.animarContador(0, 100, 3000, (valor) => this.contadorCompliance = valor);
    }, 600);
  }

  /**
   * Anima um contador de valor inicial até valor final
   * 
   * @param valorInicial - Número de onde começar
   * @param valorFinal - Número onde terminar
   * @param duracao - Duração da animação em milissegundos
   * @param callback - Função chamada a cada atualização
   */
  private animarContador(
    valorInicial: number, 
    valorFinal: number, 
    duracao: number, 
    callback: (valor: number) => void
  ): void {
    const incremento = valorFinal / (duracao / 16); // 60 FPS
    let valorAtual = valorInicial;

    const intervalo = setInterval(() => {
      valorAtual += incremento;
      
      if (valorAtual >= valorFinal) {
        valorAtual = valorFinal;
        clearInterval(intervalo);
        this.removerIntervalo(intervalo);
      }
      
      callback(Math.floor(valorAtual));
    }, 16);

    this.intervalosAtivos.push(intervalo);
  }

  /**
   * Inicia o carrossel automático de depoimentos
   * Troca depoimentos automaticamente a cada 5 segundos
   */
  private iniciarCarrosselAutomatico(): void {
    const intervalo = setInterval(() => {
      this.proximoDepoimento();
    }, 5000);

    this.intervalosAtivos.push(intervalo);
  }

  /**
   * Destaca um benefício específico
   * Cria feedback visual quando o mouse passa sobre o card
   * 
   * @param idBeneficio - Identificador do benefício
   */
  public destacarBeneficio(idBeneficio: string): void {
    this.beneficioDestacado = idBeneficio;
    
    // Adiciona efeito visual aos outros cards
    const todosCards = document.querySelectorAll('.card-beneficio');
    todosCards.forEach(card => {
      if (!card.classList.contains(`beneficio-${idBeneficio}`)) {
        card.classList.add('desfocado');
      }
    });
  }

  /**
   * Remove o destaque de todos os benefícios
   * Restaura o estado visual normal
   */
  public removerDestaque(): void {
    this.beneficioDestacado = null;
    
    const todosCards = document.querySelectorAll('.card-beneficio');
    todosCards.forEach(card => {
      card.classList.remove('desfocado');
    });
  }

  /**
   * Seleciona um benefício específico
   * Pode expandir detalhes ou executar ação específica
   * 
   * @param idBeneficio - Identificador do benefício selecionado
   */
  public selecionarBeneficio(idBeneficio: string): void {
    console.log(`Benefício selecionado: ${idBeneficio}`);
    
    // Implementação futura: pode abrir modal com mais detalhes
    // ou navegar para seção específica
    this.exibirDetalhesBeneficio(idBeneficio);
  }

  /**
   * Avança para o próximo depoimento
   * Controla a navegação do carrossel
   */
  public proximoDepoimento(): void {
    if (this.indiceDepoimentoAtual < this.depoimentos.length - 1) {
      this.indiceDepoimentoAtual++;
    } else {
      this.indiceDepoimentoAtual = 0; // Volta para o primeiro
    }
    
    this.atualizarDepoimentoAtual();
  }

  /**
   * Volta para o depoimento anterior
   * Controla a navegação reversa do carrossel
   */
  public depoimentoAnterior(): void {
    if (this.indiceDepoimentoAtual > 0) {
      this.indiceDepoimentoAtual--;
    } else {
      this.indiceDepoimentoAtual = this.depoimentos.length - 1; // Vai para o último
    }
    
    this.atualizarDepoimentoAtual();
  }

  /**
   * Seleciona um depoimento específico
   * Permite navegação direta via indicadores
   * 
   * @param indice - Índice do depoimento a ser selecionado
   */
  public selecionarDepoimento(indice: number): void {
    if (indice >= 0 && indice < this.depoimentos.length) {
      this.indiceDepoimentoAtual = indice;
      this.atualizarDepoimentoAtual();
    }
  }

  /**
   * Atualiza o depoimento atualmente exibido
   * Sincroniza o índice com o objeto atual
   */
  private atualizarDepoimentoAtual(): void {
    this.depoimentoAtual = this.depoimentos[this.indiceDepoimentoAtual];
  }

  /**
   * Obtém array de estrelas para avaliação
   * Converte número de estrelas em array para *ngFor
   * 
   * @param numeroEstrelas - Quantidade de estrelas (1-5)
   * @returns Array com o número de elementos correspondente
   */
  public obterEstrelas(numeroEstrelas: number): number[] {
    return Array(numeroEstrelas).fill(0);
  }

  /**
   * Inicia o processo de transformação
   * Redireciona para formulário de contato
   */
  public iniciarTransformacao(): void {
    console.log('Iniciando processo de transformação...');
    this.navegarParaContato();
  }

  /**
   * Agenda uma demonstração dos benefícios
   * Abre modal ou navega para agendamento
   */
  public agendarDemonstracao(): void {
    console.log('Agendando demonstração...');
    this.abrirModalAgendamento();
  }

  /**
   * Navega para a seção de contato
   * Scroll suave até o formulário
   */
  private navegarParaContato(): void {
    const secaoContato = document.getElementById('contact');
    if (secaoContato) {
      secaoContato.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Exibe detalhes de um benefício específico
   * Implementação placeholder para modal futuro
   * 
   * @param idBeneficio - Identificador do benefício
   */
  private exibirDetalhesBeneficio(idBeneficio: string): void {
    // Implementação futura: modal com detalhes expandidos
    const beneficios = {
      'tempo': 'Economia de Tempo: Automatização completa de processos manuais',
      'erros': 'Redução de Erros: Validações inteligentes e controles rigorosos',
      'compliance': 'Compliance: Atualização automática com legislação vigente',
      'suporte': 'Suporte: Equipe especializada disponível 24/7'
    };
    
    const descricao = beneficios[idBeneficio as keyof typeof beneficios];
    alert(`${descricao}\n\nEntre em contato para saber mais detalhes!`);
  }

  /**
   * Abre modal para agendamento
   * Implementação placeholder
   */
  private abrirModalAgendamento(): void {
    alert('Sistema de agendamento em desenvolvimento. Entre em contato para agendar sua demonstração.');
  }

  /**
   * Remove um intervalo específico da lista
   * 
   * @param intervalo - Intervalo a ser removido
   */
  private removerIntervalo(intervalo: any): void {
    const indice = this.intervalosAtivos.indexOf(intervalo);
    if (indice > -1) {
      this.intervalosAtivos.splice(indice, 1);
    }
  }

  /**
   * Limpa todos os intervalos ativos
   * Previne vazamentos de memória
   */
  private limparTodosIntervalos(): void {
    this.intervalosAtivos.forEach(intervalo => clearInterval(intervalo));
    this.intervalosAtivos = [];
  }

  /**
   * Obtém dados de um depoimento específico
   * 
   * @param indice - Índice do depoimento
   * @returns Dados do depoimento ou null
   */
  public obterDepoimento(indice: number): DadosDepoimento | null {
    return this.depoimentos[indice] || null;
  }

  /**
   * Obtém total de depoimentos disponíveis
   * 
   * @returns Número total de depoimentos
   */
  public obterTotalDepoimentos(): number {
    return this.depoimentos.length;
  }
}

